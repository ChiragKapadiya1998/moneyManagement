import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Calculator} from '../../../react-native-calculator';

import {wp, hp, colors, fontSize, isIos} from '../../helper/index';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const Calc = ({value, onTextChange, memoValue}) => {
  const [calculatedNumber, setCalculatedNumber] = useState(0);
  const [memo, setMemo] = useState('');

  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  // console.log('date', moment(`${selectedDate}`).format('MM/DD/YYYY'));

  return (
    <View style={styles.conatiner}>
      <View style={styles.displayContainer}>
        <TextInput value={memoValue} placeholder={'Memo'} />
        <Text style={styles.numberText}>{value}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.dateButton}
        onPress={showDatePicker}>
        <Text style={{color: colors.black}}>{'Today'}</Text>
        <Text style={{color: colors.black}}>{'Today'}</Text>
      </TouchableOpacity>
      <Calculator
        hideDisplay
        value={value}
        style={styles.calcStyle}
        numericButtonColor="black"
        onTextChange={onTextChange}
      />
      <DateTimePickerModal
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isVisible={datePickerVisible}
        maximumDate={new Date('2022-06-15')}
        minimumDate={new Date('2022-05-15')}
        date={selectedDate ? new Date(selectedDate) : undefined}
      />
    </View>
  );
};

export default Calc;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'grey',
  },
  calcStyle: {
    height: hp(35),
    width: wp(100),
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  dateButton: {
    zIndex: 1,
    right: wp(2.5),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(99) / 4 - wp(5),
    backgroundColor: colors.white,
    height: isIos ? hp(4.5) : hp(4),
    top: isIos ? hp(16.5) : hp(22.5),
  },
  displayContainer: {
    padding: wp(2),
    borderWidth: wp(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.grey,
    justifyContent: 'space-between',
    backgroundColor: colors.lightgrey,
  },
  numberText: {
    color: colors.black,
    fontSize: fontSize(22),
  },
});
