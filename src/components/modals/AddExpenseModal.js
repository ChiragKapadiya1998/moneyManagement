import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {icons} from '../../helper/iconConstant';
import {string} from '../../helper/stringConstant';
import {colors} from '../../helper/colorContant';
import {fontSize, hp, wp} from '../../helper/globalConstant';
import Header from '../Header';
import {expenses, income} from '../../helper/dataConstant';
import Shadow from '../Shadow';
import Calc from '../Calc';

const AddExpenseModal = ({isVisible, onBackPress}) => {
  const [expensesList, setExpensesList] = useState(expenses);
  const [incomeList, setIncomeList] = useState(income);
  const [isExpenses, setIsExpenses] = useState(true);
  const [isIncome, setIsIncome] = useState(false);
  const [calculator, setCalculator] = useState(false);

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

  const onExpensePress = item => {
    let selectedExpenseList = expensesList?.map(obj => {
      return obj?.id === item?.id
        ? {...obj, selected: !obj?.selected}
        : {...obj, selected: false};
    });
    setExpensesList(selectedExpenseList);
    setCalculator(true);
  };

  const onIncomePress = item => {
    let selectedIncomeList = incomeList?.map(obj => {
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
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropColor={colors.white}
      style={styles.modalContainer}>
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
                style={{
                  color: isExpenses ? colors.black : colors.grey,
                  fontSize: fontSize(15),
                }}>
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
                style={{
                  color: isIncome ? colors.black : colors.grey,
                  fontSize: fontSize(15),
                }}>
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
          />
        ) : (
          <FlatList
            numColumns={4}
            data={incomeList}
            renderItem={renderIncome}
            keyExtractor={item => item.id}
          />
        )}
        {calculator ? <Calc /> : null}
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightgrey,
    height: hp(6),
    width: wp(100),
  },
});
