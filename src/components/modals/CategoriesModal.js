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

import {TabView, SceneMap} from 'react-native-tab-view';

const CategoriesModal = ({isVisible, onBackPress, onRequestClose}) => {
  const [isIncome, setIsIncome] = useState(false);
  const [isExpenses, setIsExpenses] = useState(true);
  const [incomeList, setIncomeList] = useState(income);
  const [expensesList, setExpensesList] = useState(expenses);

  const showExpenses = () => {
    setIsExpenses(true);
    setIsIncome(false);
  };
  const showIncome = () => {
    setIsExpenses(false);
    setIsIncome(true);
  };

  const SeperatorView = () => {
    return <View style={styles.SeperatorView} />;
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
        <TouchableOpacity style={styles.minusView}>
          <Image source={icons.minus} style={styles.minusIcon} />
        </TouchableOpacity>
        <View style={styles.itemView}>
          <Image source={item.icon} style={styles.itemIcon} />
        </View>
        <Text style={[styles.itemText]}>{item.title}</Text>
        <Image source={icons.menu} style={styles.menuIcon} />
      </View>
    );
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <SafeAreaView />
        <Shadow>
          <Header
            title={string.categorySettings}
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
            data={expensesList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={SeperatorView}
          />
        ) : (
          <FlatList
            data={incomeList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={SeperatorView}
          />
        )}
      </View>
    </Modal>
  );
};

export default CategoriesModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  itemView: {
    width: wp(9.5),
    height: wp(9.5),
    marginLeft: wp(4),
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
    backgroundColor: colors.lightgrey,
  },
  itemIcon: {
    width: wp(5.5),
    height: wp(5.5),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  itemText: {
    marginLeft: wp(3),
    color: colors.black,
    fontSize: fontSize(14),
  },
  catagoryBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: hp(0.4),
    backgroundColor: colors.white,
  },
  renderView: {
    width: wp(100),
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: wp(2),
    paddingHorizontal: wp(4),
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
  SeperatorView: {
    borderWidth: wp(0.1),
    marginHorizontal: wp(3),
    borderColor: colors.grey,
  },
  minusView: {
    width: wp(4.5),
    height: wp(4.5),
    borderRadius: wp(5),
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  minusIcon: {
    width: wp(3),
    height: hp(2),
    tintColor: colors.white,
  },
  menuIcon: {
    right: wp(6),
    width: wp(4),
    height: wp(4),
    position: 'absolute',
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
});
