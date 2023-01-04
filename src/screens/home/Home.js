import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {icons, colors, string, fontSize, hp, wp} from '../../helper/index';
import {
  Header,
  Shadow,
  RoundButton,
  AddExpenseModal,
} from '../../components/index';
// import {useDispatch} from 'react-redux';
// import {addUser} from '../../redux/action/Action';
import MonthYearPicker from '../../components/common/MonthYearPicker';

const Home = () => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const {navigate, openDrawer} = useNavigation();
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [calender, setCalender] = useState(false);
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  console.log('month...', month?.name);
  console.log('year...', year);

  const handleExpenseModal = () => {
    setShowExpenseModal(!showExpenseModal);
  };
  const handleCalender = () => {
    setCalender(!calender);
  };

  // const dispatch = useDispatch();
  // const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        isDate
        title={`${month?.name} ${year}`}
        leftSource={icons.menu}
        onLeftPress={() => openDrawer()}
        rightSource={icons.refresh}
        onDownPress={handleCalender}
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

      {/* <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={{backgroundColor: 'lightgrey', height: 30}}
      />
      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          alignSelf: 'center',
        }}
        onPress={() => dispatch(addUser(name))}>
        <Text>Submit</Text>
      </TouchableOpacity> */}
      {/* <Shadow>
        <TouchableOpacity style={styles.warningView}>
          <Text style={styles.warnText}>{string.warnText}</Text>
        </TouchableOpacity>
      </Shadow> */}
      {/* <Shadow>
        <TouchableOpacity style={styles.listItem}>
          <Text>Food</Text>
          <Text>5000</Text>
        </TouchableOpacity>
      </Shadow> */}
      {calender && (
        <MonthYearPicker
          onChangeYear={text => setYear(text)}
          onChangeMonth={text => {
            setMonth(text);
          }}
        />
      )}
      <AddExpenseModal
        isVisible={showExpenseModal}
        onBackPress={handleExpenseModal}
        onRequestClose={handleExpenseModal}
      />
      <RoundButton onPress={handleExpenseModal} />
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
    height: hp(12),
    borderRadius: 5,
    margin: wp(2.67),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: wp(0.2),
    backgroundColor: colors.white,
    borderColor: colors.lightgrey,
  },
  verticleSeperator: {
    height: hp(3),
    width: wp(0.1),
    backgroundColor: colors.black,
  },
  mainText: {
    color: colors.black,
    fontSize: fontSize(13),
  },
  numberText: {
    marginTop: hp(1),
    color: colors.black,
    fontSize: fontSize(23),
  },
  btnView: {
    flex: 1,
    alignItems: 'center',
  },
  listItem: {
    height: hp(5),
    borderRadius: 5,
    margin: wp(2.67),
    padding: wp(2.67),
    borderWidth: wp(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.lightgrey,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  warningView: {
    padding: wp(2),
    borderRadius: 5,
    margin: wp(2.67),
    flexDirection: 'row',
    borderWidth: wp(0.2),
    alignItems: 'center',
    borderColor: colors.lightgrey,
    backgroundColor: colors.warnBg,
    justifyContent: 'space-between',
  },
  warnText: {
    color: colors.warnText,
    fontSize: fontSize(12),
  },
});
