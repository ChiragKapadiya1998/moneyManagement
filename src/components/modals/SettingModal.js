import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {icons, string, colors, fontSize, hp, wp} from '../../helper/index';
import Shadow from '../common/Shadow';
import Header from '../common/Header';
import ReminderModal from './ReminderModal';
import {useSelector} from 'react-redux';
import moment from 'moment';

const SettingModal = ({isVisible, onClosePress}) => {
  const reminderList = useSelector(state => state?.data?.reminder);
  const [reminderModal, setReminderModal] = useState(false);

  const handleReminderModal = () => {
    setReminderModal(!reminderModal);
  };

  const listOfReminder = reminderList.filter(i => {
    if (i?.isSwitched == true) return i;
  });
  console.log('listOfReminder====,,,,', listOfReminder);

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <SafeAreaView />
        <Shadow>
          <Header
            title={string.settings}
            onLeftPress={onClosePress}
            leftSource={icons.backArrow}
          />
        </Shadow>
        <Pressable style={styles.ReminderView} onPress={handleReminderModal}>
          <Text style={styles.reminderTitle}>{'Smart reminder'}</Text>
          <Text style={styles.reminderText}>
            {listOfReminder?.length === 0
              ? 'no reminder'
              : 'Fire notification at '}
            {listOfReminder.map((i, index) => {
              console.log('INDEX', index);
              return (
                <Text key={i.id}>
                  {moment(i.time).format('hh:mm') +
                    (listOfReminder.length != index + 1 ? ', ' : '')}
                </Text>
              );
            })}
          </Text>
        </Pressable>
      </View>
      <ReminderModal
        isVisible={reminderModal}
        onBackPress={handleReminderModal}
      />
    </Modal>
  );
};

export default SettingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ReminderView: {
    padding: wp(3.5),
    borderBottomWidth: wp(0.2),
    borderBottomColor: colors.grey,
  },
  reminderTitle: {
    color: colors.black,
    fontSize: fontSize(16),
  },
  reminderText: {
    color: colors.grey,
    marginTop: wp(0.6),
    fontSize: fontSize(14),
  },
});
