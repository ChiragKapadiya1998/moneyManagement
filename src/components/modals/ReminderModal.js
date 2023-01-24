import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  Switch,
  FlatList,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

import {icons, string, colors, fontSize, wp} from '../../helper/index';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Shadow from '../common/Shadow';
import Header from '../common/Header';
import {
  addReminder,
  deleteReminder,
  updateReminder,
} from '../../redux/action/Action';

const ReminderModal = ({isVisible, onBackPress}) => {
  const dispatch = useDispatch();

  const reminderList = useSelector(state => state?.data?.reminder);
  console.log('reminderList======>', reminderList);

  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  console.log('selectedTime...', selectedTime);

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirm = time => {
    setSelectedTime(new Date(time));
    let reminderData = {
      id: Math.floor(Math.random() * 99999999),
      isSwitched: true,
      time: moment(selectedTime).format(),
    };
    dispatch(addReminder(reminderData));
    hideTimePicker();
  };

  const onDeletePress = item => dispatch(deleteReminder(item?.id));

  const renderReminder = ({item}) => {
    console.log('item========>>>', item);
    console.log('item?.id========>>>', item?.id);
    return (
      <View style={styles.reminderView}>
        <View style={styles.timeView}>
          <TouchableOpacity onPress={() => onDeletePress(item)}>
            <Image source={icons.close} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text style={styles.timeText}>
            {moment(item?.time).format('hh:mm')}
          </Text>
        </View>
        <Switch
          value={item?.isSwitched}
          ios_backgroundColor={colors.white}
          thumbColor={item?.isSwitched ? colors.title : colors.lightgrey}
          trackColor={{false: colors.grey, true: colors.lightTitle}}
          onValueChange={() => {
            dispatch(updateReminder(item?.id));
          }}
        />
      </View>
    );
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <SafeAreaView />
        <Shadow>
          <Header
            title={string.reminder}
            onLeftPress={onBackPress}
            leftSource={icons.backArrow}
          />
        </Shadow>
        <ScrollView bounces={false}>
          <View>
            <FlatList
              data={reminderList}
              renderItem={(item, index) => renderReminder(item, index)}
              keyExtractor={item => item?.id}
            />
          </View>
          <TouchableOpacity
            style={styles.createReminderView}
            onPress={showTimePicker}>
            <Image source={icons.plus} style={styles.iconStyle} />
            <Text style={styles.createTitle}>{'Create a reminder'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <DateTimePickerModal
        is24Hour
        mode="time"
        locale="en_GB"
        date={selectedTime}
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
        isVisible={timePickerVisible}
      />
    </Modal>
  );
};

export default ReminderModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  reminderView: {
    padding: wp(5),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: wp(0.1),
    borderBottomColor: colors.grey,
    justifyContent: 'space-between',
  },
  createReminderView: {
    padding: wp(5),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: wp(0.1),
    borderBottomColor: colors.grey,
  },
  timeText: {
    paddingLeft: wp(4),
    color: colors.black,
    fontSize: fontSize(16),
  },
  createTitle: {
    color: colors.black,
    marginTop: wp(0.6),
    fontSize: fontSize(16),
    paddingLeft: wp(4),
  },
  iconStyle: {
    width: wp(3.5),
    height: wp(3.5),
    tintColor: colors.grey,
  },
  timeView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
