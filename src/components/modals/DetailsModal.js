import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
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
  isIos,
} from '../../helper/index';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../../redux/action/Action';
import AddExpenseModal from './AddExpenseModal';

const DetailsModal = ({
  isVisible,
  onBackPress,
  userDetailId,
  onDeletePress,
  onRequestClose,
}) => {
  const useDetails = useSelector(state => state?.data?.userData);
  console.log('useDetails=====', userDetailId);

  const userDetailData = useDetails?.find(item => item.id == userDetailId);
  console.log('userDetailData=====', userDetailData);

  const [addExpenseModal, setAddExpenseModal] = useState(false);
  const handleAddexpenseModal = () => {
    setAddExpenseModal(!addExpenseModal);
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      backdropColor={colors.white}
      style={styles.modalContainer}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <SafeAreaView />
        <Shadow>
          <Header
            title={'Details'}
            onLeftPress={onBackPress}
            leftSource={icons.backArrow}
            rightSource={icons.delete}
            onRightPress={onDeletePress}
            rightIconStyle={styles.rightIconStyle}
          />
        </Shadow>
        <Shadow>
          <View style={styles.subView}>
            <View style={styles.detailBox}>
              <View style={styles.detailIconView}>
                <Image source={icons.salary} style={styles.detailIconStyle} />
              </View>
              <View style={styles.detailTitleView}>
                <Text style={styles.detailTitleText}>
                  {userDetailData?.element}
                </Text>
              </View>
            </View>
            <View style={styles.SeperatorView} />
            <View style={styles.detailView}>
              <View style={styles.detailSubView1}>
                <Text style={styles.titleText}>{'Category'}</Text>
                <Text style={styles.titleText}>{'Money'}</Text>
                <Text style={styles.titleText}>{'Date'}</Text>
                <Text style={styles.titleText}>{'Memo'}</Text>
              </View>
              <View style={styles.detailSubView2}>
                <Text style={styles.detailText}>
                  {userDetailData?.category}
                </Text>
                <Text style={styles.detailText}>
                  {userDetailData?.calculatedNumber}
                </Text>
                <Text style={styles.detailText}>
                  {userDetailData?.selectedDate}
                </Text>
                <Text style={styles.detailText}>{userDetailData?.element}</Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.roundButton, styles.shadowStyle]}
              onPress={handleAddexpenseModal}>
              <Image
                source={icons.edit}
                style={[styles.rightIconStyle, {tintColor: colors.white}]}
              />
            </TouchableOpacity>
          </View>
        </Shadow>
        <AddExpenseModal
          isEdit
          dataToEdit={userDetailData}
          isVisible={addExpenseModal}
          onBackPress={handleAddexpenseModal}
        />
      </View>
    </Modal>
  );
};

export default DetailsModal;

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
  subView: {
    width: wp(95),
    borderRadius: 5,
    margin: wp(2.67),
    alignItems: 'center',
    borderWidth: wp(0.2),
    backgroundColor: colors.white,
    borderColor: colors.lightgrey,
  },
  SeperatorView: {
    width: '95%',
    borderWidth: wp(0.1),
    borderColor: colors.lightgrey,
  },
  rightIconStyle: {
    width: wp(6),
    height: wp(6),
  },
  detailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  detailIconView: {
    flex: 0.3,
    padding: wp(4),
  },
  detailIconStyle: {
    width: wp(8),
    height: wp(8),
  },
  detailTitleView: {
    flex: 1,
    paddingVertical: hp(3.6),
  },
  detailTitleText: {
    color: colors.black,
    fontSize: fontSize(20),
  },
  detailView: {
    flexDirection: 'row',
  },
  detailSubView1: {
    flex: 0.3,
    padding: wp(4),
  },
  detailSubView2: {
    flex: 1,
    paddingVertical: wp(4),
  },
  titleText: {
    color: colors.grey,
    fontSize: fontSize(16),
    paddingVertical: hp(1.23),
  },
  detailText: {
    color: colors.black,
    fontSize: fontSize(16),
    paddingVertical: hp(1.23),
  },
  // Edit button
  roundButton: {
    width: wp(12),
    height: wp(12),
    bottom: wp(-6),
    right: wp(5.33),
    position: 'absolute',
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
    backgroundColor: colors.title,
  },
  plusStyle: {
    color: colors.white,
    fontSize: fontSize(30),
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 10,
    shadowRadius: 3,
    shadowOpacity: 0.4,
    shadowColor: colors.grey,
  },
});
