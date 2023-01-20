import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Modal from 'react-native-modal';
import {starArray} from '../../helper/dataConstant';

import {icons, string, colors, fontSize, hp, wp} from '../../helper/index';
import FeedBackModal from './FeedBackModal';

const RatingModal = ({isVisible, onBackdropPress}) => {
  const [showFeedBackModal, setShowFeedBackModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlefeedBackModal = () => {
    setShowFeedBackModal(!showFeedBackModal);
  };
  console.log('selectedIndex...', selectedIndex);
  // const onStarPress = index => {
  //   console.log('star press index...', index);
  //   setSelectedIndex(index);
  //   // handlefeedBackModal();
  // };

  const renderStars = ({item, index}) => {
    console.log('star index...', item, index);
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedIndex(index);
          handlefeedBackModal();
        }}>
        <Image source={icons.star} style={styles.starStyle} />
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalView}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.5}
      onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.mainText}>{string.ratingUs}</Text>
          <TouchableOpacity onPress={onBackdropPress}>
            <Image source={icons.close} style={styles.closeBtn} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subText}>{string.ratingDesc}</Text>
        <View style={styles.starView}>
          <FlatList
            horizontal
            data={starArray}
            scrollEnabled={false}
            renderItem={renderStars}
          />
        </View>
        <Image source={icons.rightUpArrow} style={styles.rightUpArrow} />
      </View>
      <FeedBackModal
        isVisible={showFeedBackModal}
        onClosePress={handlefeedBackModal}
        selectedIndex={selectedIndex}
      />
    </Modal>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  container: {
    width: wp(85),
    padding: wp(5.33),
    borderRadius: wp(1),
    backgroundColor: colors.white,
  },
  modalView: {
    alignItems: 'center',
  },
  mainText: {
    color: colors.black,
    fontSize: fontSize(22),
    marginBottom: hp(1.23),
  },
  subText: {
    color: colors.grey,
    marginTop: hp(0.5),
    lineHeight: hp(2.4),
    fontSize: fontSize(16),
  },
  okBtn: {
    marginTop: hp(1.5),
    alignItems: 'flex-end',
  },
  okText: {
    fontWeight: '700',
    color: colors.title,
    fontSize: fontSize(14),
  },
  starStyle: {
    width: wp(9),
    height: wp(9),
    tintColor: colors.title,
    marginHorizontal: wp(1.33),
  },
  starView: {
    paddingTop: hp(2.5),
    alignItems: 'center',
  },
  rightUpArrow: {
    width: wp(21),
    height: hp(5),
    marginRight: wp(12),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeBtn: {
    width: wp(5),
    height: wp(5),
  },
});
