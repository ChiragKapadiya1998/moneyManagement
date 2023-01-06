import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Calculator} from '../../../react-native-calculator';
import {wp, hp, colors, fontSize, isIos} from '../../helper/index';

const Calc = ({
  value,
  onCalc,
  memoValue,
  onTextChange,
  onChangeText,
  selectedDate,
  onDatePickerPress,
}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.displayContainer}>
        <TextInput
          maxLength={20}
          value={memoValue}
          placeholder={'Memo'}
          style={styles.textInput}
          onChangeText={onChangeText}
        />
        <Text style={styles.numberText}>{value}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.dateButton}
        onPress={onDatePickerPress}>
        <Text style={styles.dateText}>{selectedDate}</Text>
        {/* {selectedDate !== moment(new Date()).format('DD/MM/YYYY') && (
          <Text style={styles.yearText}>
            {moment(selectedDate).format('YYYY')}
          </Text>
        )} */}
      </TouchableOpacity>
      <Calculator
        hideDisplay
        value={value}
        style={styles.calcStyle}
        numericButtonColor="black"
        onTextChange={onTextChange}
        onCalc={onCalc}
        thousandSeparator=""
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
    height: hp(25),
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
    top: isIos ? hp(6.2) : hp(9),
    backgroundColor: colors.white,
    height: isIos ? hp(4.5) : hp(4),
  },
  displayContainer: {
    borderWidth: wp(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.grey,
    justifyContent: 'space-between',
    backgroundColor: colors.lightgrey,
    padding: isIos ? wp(2.5) : wp(1.5),
  },
  numberText: {
    color: colors.black,
    fontSize: fontSize(22),
  },
  textInput: {
    flex: 1,
    marginRight: wp(6),
    color: colors.black,
    fontSize: fontSize(16),
    backgroundColor: 'transparent',
  },
  dateText: {
    color: colors.black,
    fontSize: fontSize(15),
  },
  yearText: {
    color: colors.grey,
    marginTop: hp(0.5),
    fontSize: fontSize(12),
  },
});

//  <TouchableOpacity
//    activeOpacity={1}
//    style={styles.dateButton}
//    onPress={showDatePicker}>
//    <Text style={styles.dateText}>
//      {selectedDate !== moment(new Date()).format('DD/MM/YYYY')
//        ? moment(selectedDate).format('DD/MM')
//        : 'Today'}
//    </Text>
//    {selectedDate !== moment(new Date()).format('DD/MM/YYYY') && (
//      <Text style={styles.yearText}>{moment(selectedDate).format('YYYY')}</Text>
//    )}
//  </TouchableOpacity>;

{
  /* <DateTimePickerModal
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isVisible={datePickerVisible}
        maximumDate={new Date()}
        date={selectedDate ? new Date(selectedDate) : undefined}
      /> */
}
