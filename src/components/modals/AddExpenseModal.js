import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

// import Modal from 'react-native-modal';

import {Shadow, Header, Calc} from '../index';
import {
  hp,
  wp,
  icons,
  string,
  colors,
  income,
  fontSize,
  expenses,
} from '../../helper/index';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addData, editData} from '../../redux/action/Action';

const AddExpenseModal = ({
  isVisible,
  onBackPress,
  onRequestClose,
  isEdit,
  dataToEdit,
}) => {
  const dispatch = useDispatch();

  console.log('dataToEdit==========>', dataToEdit, isEdit);

  const [isIncome, setIsIncome] = useState(false);
  const [isExpenses, setIsExpenses] = useState(true);
  const [calculator, setCalculator] = useState(false);
  const [incomeList, setIncomeList] = useState(income);
  const [expensesList, setExpensesList] = useState(expenses);

  const [expenseElement, setExpenseElement] = useState('');
  const [incomeElement, setIncomeElement] = useState('');

  const [calculatedNumber, setCalculatedNumber] = useState(
    isEdit ? dataToEdit?.calculatedNumber : 0,
  );
  const [checkCount, setCheckCount] = useState(0);
  const [memo, setMemo] = useState('');

  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format('DD/MM/YYYY'),
  );
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const today = moment(new Date()).format('DD/MM/YYYY');

  console.log('today', today);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = date => {
    setSelectedDate(moment(date).format('DD/MM/YYYY'));
    hideDatePicker();
    console.log('date', date);
  };

  // console.log('date', moment(`${selectedDate}`).format('MM/DD/YYYY'));

  const handleCalc = () => {
    setCalculator(!calculator);
  };

  const showExpenses = () => {
    setIsExpenses(true);
    setIsIncome(false);
  };
  const showIncome = () => {
    setIsExpenses(false);
    setIsIncome(true);
  };

  console.log('checkcount.....', checkCount);
  console.log('date.....', moment(new Date()));

  const onCalcPress = () => {
    setCheckCount(checkCount + 1);
    if (checkCount % 2 === 0 && checkCount > 0) {
      handleCalc();
      setIncomeElement('');
      setExpenseElement('');
      setCalculatedNumber(0);
      setMemo('');
      setSelectedDate(moment(new Date()).format('DD/MM/YYYY'));

      if (isExpenses) {
        let data = {
          id: !isEdit ? Math.floor(Math.random() * 99999999) : dataToEdit?.id,
          category: 'expense',
          memo: expenseElement,
          element: memo ? memo : expenseElement,
          calculatedNumber: calculatedNumber,
          selectedDate: selectedDate,
        };
        {
          isEdit ? dispatch(editData(data)) : dispatch(addData(data));
        }
      } else {
        let data = {
          id: !isEdit ? Math.floor(Math.random() * 99999999) : dataToEdit?.id,
          category: 'income',
          memo: incomeElement,
          element: memo ? memo : incomeElement,
          calculatedNumber: calculatedNumber,
          selectedDate: selectedDate,
        };
        {
          isEdit ? dispatch(editData(data)) : dispatch(addData(data));
        }
      }
      onBackPress;
    }
  };

  const onExpensePress = item => {
    let selectedExpenseList = expensesList?.map(obj => {
      return obj?.id === item?.id
        ? {...obj, selected: !obj?.selected}
        : {...obj, selected: false};
    });
    setExpensesList(selectedExpenseList);
    if (item?.selected === true) {
      setExpenseElement(item?.title);
      console.log('selected title =====> ', expenseElement);
    }
    setCalculator(true);
  };

  const onIncomePress = item => {
    let selectedIncomeList = incomeList?.map(obj => {
      if (obj?.selected === true) {
        setIncomeElement(obj?.title);
        console.log('selected title =====> ', incomeElement);
      }
      return obj?.id === item?.id
        ? {...obj, selected: !obj?.selected}
        : {...obj, selected: false};
    });
    setIncomeList(selectedIncomeList);
    setCalculator(true);
  };

  const renderExpenses = ({item}) => {
    return (
      <View style={styles.renderView}>
        <TouchableOpacity
          style={[
            styles.itemView,
            {
              backgroundColor: item.selected ? item.bgColor : colors.lightgrey,
            },
          ]}
          onPress={() => onExpensePress(item)}>
          <Image
            source={item.icon}
            style={[
              styles.itemIcon,
              {tintColor: item.selected ? colors.white : colors.grey},
            ]}
          />
        </TouchableOpacity>
        <Text style={[styles.itemText, {color: colors.black}]}>
          {item.title}
        </Text>
      </View>
    );
  };

  const renderIncome = ({item}) => {
    return (
      <View style={styles.renderView}>
        <TouchableOpacity
          style={[
            styles.itemView,
            {
              backgroundColor: item.selected ? item.bgColor : colors.lightgrey,
            },
          ]}
          onPress={() => onIncomePress(item)}>
          <Image
            source={item.icon}
            style={[
              styles.itemIcon,
              {tintColor: item.selected ? colors.white : colors.grey},
            ]}
          />
        </TouchableOpacity>
        <Text style={[styles.itemText, {color: colors.black}]}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <Modal
      visible={isVisible}
      // animationIn="slideInUp"
      // animationOut="slideOutDown"
      animationType="slide"
      backdropColor={colors.white}
      style={styles.modalContainer}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <SafeAreaView />
        <Shadow>
          <Header
            title={string.expenses}
            onLeftPress={onBackPress}
            leftSource={icons.backArrow}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.catagoryBtn,
                {borderBottomColor: isExpenses ? colors.title : colors.white},
              ]}
              onPress={showExpenses}>
              <Text
                style={[
                  styles.titleText,
                  {color: isExpenses ? colors.black : colors.grey},
                ]}>
                {string.expenses}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.catagoryBtn,
                {borderBottomColor: isIncome ? colors.title : colors.white},
              ]}
              onPress={showIncome}>
              <Text
                style={[
                  styles.titleText,
                  {color: isIncome ? colors.black : colors.grey},
                ]}>
                {string.income}
              </Text>
            </TouchableOpacity>
          </View>
        </Shadow>

        {isExpenses ? (
          <FlatList
            numColumns={4}
            data={expensesList}
            renderItem={renderExpenses}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <FlatList
            numColumns={4}
            data={incomeList}
            renderItem={renderIncome}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
        {calculator ? (
          <Calc
            onCalc={onCalcPress}
            value={calculatedNumber}
            onTextChange={number => setCalculatedNumber(number)}
            selectedDate={'Today'}
            onDatePickerPress={showDatePicker}
            onMemoTextChange={text => setMemo(text)}
          />
        ) : null}
      </View>
      <DateTimePickerModal
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isVisible={datePickerVisible}
        maximumDate={new Date()}
        date={new Date()}
        // date={selectedDate ? new Date(selectedDate) : null}
      />
    </Modal>
  );
};

export default AddExpenseModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  itemView: {
    width: wp(12),
    height: wp(12),
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
  },
  itemIcon: {
    width: wp(7),
    height: wp(7),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  itemText: {
    marginTop: hp(1),
    color: colors.grey,
    fontSize: fontSize(12),
  },
  catagoryBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: hp(0.4),
    backgroundColor: colors.white,
  },
  renderView: {
    padding: wp(4.8),
    alignItems: 'center',
  },
  titleText: {
    fontSize: fontSize(15),
  },
  buttonContainer: {
    height: hp(6),
    width: wp(100),
    flexDirection: 'row',
    backgroundColor: colors.lightgrey,
  },
});
