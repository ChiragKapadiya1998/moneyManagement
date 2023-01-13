import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {icons, colors, string, fontSize, hp, wp} from '../../helper/index';
import {
  Header,
  Shadow,
  RoundButton,
  AddExpenseModal,
  LoginModal,
  DetailsModal,
} from '../../components/index';
// import {useDispatch} from 'react-redux';
// import {addUser} from '../../redux/action/Action';
import MonthYearPicker from '../../components/common/MonthYearPicker';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {deleteData} from '../../redux/action/Action';

const Home = () => {
  const userData = useSelector(state => state?.data?.userData);
  console.log('userData ======> ', userData);

  const dispatch = useDispatch();

  const [elementId, setElementId] = useState();

  console.log('elementId', elementId);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const [detailsModal, setDetailsModal] = useState(false);
  const handleDetailsModal = item => {
    setDetailsModal(!detailsModal);
    console.log('ididididid', item?.id);
    setElementId(item?.id);
  };

  const isDrawerOpen = useDrawerStatus() === 'open';
  const {navigate, openDrawer} = useNavigation();
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [calender, setCalender] = useState(false);
  const [month, setMonth] = useState(
    moment().month(new Date().getMonth()).format('MMM'),
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMonth, setIsMonth] = useState(false);

  const expenseArray = userData?.filter(obj => {
    if (obj?.category === 'expense') {
      return obj;
    }
  });
  const incomeArray = userData?.filter(obj => {
    if (obj?.category === 'income') {
      return obj;
    }
  });

  const expenseTotal = expenseArray?.reduce((acc, value) => {
    return acc + Number(value.calculatedNumber);
  }, 0);
  console.log('expenseTotal----------', expenseTotal);

  const incomeTotal = incomeArray?.reduce((acc, value) => {
    return acc + Number(value.calculatedNumber);
  }, 0);
  console.log('incomeTotal----------', incomeTotal);

  // const [incomeTotal, setIncomeTotal] = useState(expense);
  // const [expenseTotal, setExpenseTotal] = useState(income);

  // console.log('incomeTotal----------', incomeTotal);
  // console.log('expenseTotal----------', expenseTotal);

  // console.log('month...', month?.name);
  // console.log('year...', year);
  // console.log('month...====', moment().month(0).format('MMM'));
  const [showBox, setShowBox] = useState(false);
  const onDeletePress = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to delete this data?',
      [
        {
          text: 'Yes',
          onPress: () => {
            dispatch(deleteData(elementId));
            setShowBox(false);
            setDetailsModal(false);
          },
        },
        {
          text: 'No',
          onPress: () => {
            setShowBox(false);
          },
        },
      ],
    );
  };

  const handleExpenseModal = () => {
    setShowExpenseModal(!showExpenseModal);
  };
  const handleCalender = () => {
    setCalender(!calender);
  };

  const renderData = ({item}) => {
    return (
      <Shadow>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => handleDetailsModal(item)}>
          <Text style={{color: 'black'}}>{item?.element}</Text>
          <Text style={{color: item?.category == 'income' ? 'green' : 'red'}}>
            {item?.category === 'income'
              ? item?.calculatedNumber
              : '-' + item?.calculatedNumber}
          </Text>
        </TouchableOpacity>
      </Shadow>
    );
  };

  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  console.log('elementId', elementId);
  return (
    <View style={styles.container}>
      <RoundButton onPress={handleExpenseModal} />
      <SafeAreaView />
      <Header
        isDate
        title={isMonth ? `${month?.name} ${year}` : `${month} ${year}`}
        leftSource={icons.menu}
        onLeftPress={() => openDrawer()}
        rightSource={icons.refresh}
        onDownPress={handleCalender}
      />
      <Shadow>
        <View style={styles.subView}>
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.mainText}>{string.income}</Text>
            <Text style={styles.numberText}>{incomeTotal}</Text>
          </TouchableOpacity>
          <View style={styles.verticleSeperator} />
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.mainText}>{string.expenses}</Text>
            <Text style={styles.numberText}>{expenseTotal}</Text>
          </TouchableOpacity>
          <View style={styles.verticleSeperator} />
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.mainText}>{string.balance}</Text>
            <Text style={styles.numberText}>{incomeTotal - expenseTotal}</Text>
          </TouchableOpacity>
        </View>
      </Shadow>

      <Shadow>
        <TouchableOpacity style={styles.warningView} onPress={handleLoginModal}>
          <Image source={icons.warning} style={styles.warnIcon} />
          <Text style={styles.warnText}>{string.warnText}</Text>
        </TouchableOpacity>
      </Shadow>

      {userData?.length !== 0 && (
        <FlatList
          data={userData}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      )}

      {calender && (
        <MonthYearPicker
          onChangeYear={text => setYear(text)}
          onChangeMonth={text => {
            setMonth(text);
            setIsMonth(true);
          }}
        />
      )}
      <AddExpenseModal
        isVisible={showExpenseModal}
        onBackPress={handleExpenseModal}
        onRequestClose={handleExpenseModal}
      />
      <LoginModal isVisible={showLoginModal} onClosePress={handleLoginModal} />
      <DetailsModal
        isVisible={detailsModal}
        onBackPress={handleDetailsModal}
        userDetailId={elementId}
        onDeletePress={() => onDeletePress()}
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
    fontSize: fontSize(20),
  },
  btnView: {
    flex: 1,
    alignItems: 'center',
  },
  listItem: {
    padding: wp(2),
    marginTop: hp(0.5),
    borderWidth: wp(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(2.67),
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
    justifyContent: 'flex-start',
    borderColor: colors.lightgrey,
    backgroundColor: colors.warnBg,
  },
  warnIcon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    tintColor: colors.warnText,
  },
  warnText: {
    marginLeft: wp(1.5),
    color: colors.warnText,
    fontSize: fontSize(12),
  },
});
