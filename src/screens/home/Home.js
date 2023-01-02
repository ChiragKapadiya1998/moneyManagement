import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {icons} from '../../helper/iconConstant';
import {colors} from '../../helper/colorContant';
import {fontSize, hp, wp} from '../../helper/globalConstant';
import Shadow from '../../components/Shadow';
import {string} from '../../helper/stringConstant';
import RoundButton from '../../components/RoundButton';
// import {useDrawerStatus} from '@react-navigation/drawer';
import AddExpenseModal from '../../components/modals/AddExpenseModal';

const Home = () => {
  //   const isDrawerOpen = useDrawerStatus() === 'open';
  console.log('asdasd');
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const handleExpenseModal = () => {
    setShowExpenseModal(!showExpenseModal);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        isDate
        title={'Calander'}
        leftSource={icons.menu}
        rightSource={icons.refresh}
      />
      <Shadow>
        <View style={styles.subView}>
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.mainText}>{string.income}</Text>
            <Text style={styles.numberText}>{'0'}</Text>
          </TouchableOpacity>
          <View style={styles.verticleSeperator} />
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.mainText}>{string.expenses}</Text>
            <Text style={styles.numberText}>{'0'}</Text>
          </TouchableOpacity>
          <View style={styles.verticleSeperator} />
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.mainText}>{string.balance}</Text>
            <Text style={styles.numberText}>{'0'}</Text>
          </TouchableOpacity>
        </View>
      </Shadow>
      <Shadow>
        <TouchableOpacity style={styles.warningView}>
          <Text style={styles.warnText}>{string.warnText}</Text>
        </TouchableOpacity>
      </Shadow>
      <Shadow>
        <TouchableOpacity style={styles.listItem}>
          <Text>Food</Text>
          <Text>5000</Text>
        </TouchableOpacity>
      </Shadow>
      <RoundButton onPress={handleExpenseModal} />
      <AddExpenseModal
        isVisible={showExpenseModal}
        onBackPress={handleExpenseModal}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
  },
  subView: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.lightgrey,
    borderWidth: wp(0.2),
    margin: wp(2.67),
    height: hp(10),
    borderRadius: 5,
    alignItems: 'center',
  },
  verticleSeperator: {
    backgroundColor: colors.black,
    height: hp(3),
    width: wp(0.1),
  },
  mainText: {
    color: colors.black,
    fontSize: fontSize(13),
  },
  numberText: {
    color: colors.black,
    fontSize: fontSize(23),
    marginTop: hp(1),
  },
  btnView: {
    flex: 1,
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.lightgrey,
    borderWidth: wp(0.2),
    margin: wp(2.67),
    height: hp(5),
    borderRadius: 5,
    alignItems: 'center',
    padding: wp(2.67),
    justifyContent: 'space-between',
  },
  warningView: {
    flexDirection: 'row',
    backgroundColor: colors.warnBg,
    borderColor: colors.lightgrey,
    borderWidth: wp(0.2),
    margin: wp(2.67),
    borderRadius: 5,
    alignItems: 'center',
    padding: wp(2),
    justifyContent: 'space-between',
  },
  warnText: {
    color: colors.warnText,
    fontSize: fontSize(12),
  },
});
