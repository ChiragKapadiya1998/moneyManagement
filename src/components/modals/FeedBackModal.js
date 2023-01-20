import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {CommonButton} from '../index';
import {starArray} from '../../helper/dataConstant';
import {icons, string, colors, fontSize, hp, wp} from '../../helper/index';
import Shadow from '../common/Shadow';
import Header from '../common/Header';

const FeedBackModal = ({isVisible, onClosePress}) => {
  const [updateStar, setUpdateStar] = useState(starArray);
  const [feedback, setFeedback] = useState('');
  const [feedBackText, setFeedBackText] = useState('');
  console.log('updateStar...', updateStar);

  const onSubmitPress = () => {};

  const onStarPress = (item, index) => {
    let updatedNewStar = updateStar.map(obj => {
      if (obj.id <= index + 1) {
        if (obj.id == index + 1) {
          setFeedback(item?.feedback);
        }
        return {...obj, isSelected: true};
      } else {
        return {...obj, isSelected: false};
      }
    });
    setUpdateStar(updatedNewStar);
    console.log('updatedNewStar...', updatedNewStar);
  };

  // const renderStars = () => {
  //   return (
  //     <TouchableOpacity
  //       style={{marginHorizontal: wp(2.6)}}
  //       onPress={onStarPress}>
  //       <Image source={icons.yellowStar} style={styles.yellowStar} />
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <SafeAreaView />
        <Shadow>
          <Header
            title={string.rate}
            customTitle={{fontWeight: '400'}}
            onLeftPress={onClosePress}
            leftSource={icons.backArrow}
          />
        </Shadow>
        <View style={{height: 150}}>
          <FlatList
            horizontal
            data={updateStar}
            scrollEnabled={false}
            style={{marginTop: 100}}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              console.log('item,,,', item);
              return (
                <TouchableOpacity
                  style={{marginHorizontal: wp(2.6)}}
                  onPress={() => onStarPress(item, index)}>
                  <Image
                    source={icons.yellowStar}
                    style={[
                      styles.yellowStar,
                      {
                        tintColor:
                          item?.isSelected == false ? colors.lightTitle : null,
                      },
                    ]}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.starText}>{feedback}</Text>
        <TextInput
          multiline
          autoFocus
          maxLength={500}
          style={styles.textInputBox}
          placeholder={string.fBPlaceHolder}
          onChangeText={text => setFeedBackText(text)}
        />
        <Text style={styles.feedbackText}>{string.feedbackDesc}</Text>
        <CommonButton
          title={string.submit}
          onPress={onClosePress}
          additionalBtnStyle={styles.submitBtn}
          additionalTitleStyle={styles.submitText}
        />
      </View>
    </Modal>
  );
};

export default FeedBackModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  closeBtn: {
    top: hp(5),
    right: wp(2.67),
    padding: wp(1.6),
    position: 'absolute',
    borderRadius: wp(100),
  },
  closeIcon: {
    width: wp(5.33),
    height: wp(5.33),
    tintColor: colors.grey,
  },
  starText: {
    marginTop: hp(2),
    color: colors.grey,
    fontSize: fontSize(18),
  },
  feedbackText: {
    marginTop: hp(2),
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize(15),
  },
  submitBtn: {
    marginTop: hp(4),
    backgroundColor: colors.lightGreen,
  },
  submitText: {
    fontWeight: '700',
    letterSpacing: wp(1),
  },
  textInputBox: {
    width: wp(85),
    marginTop: hp(5),
    lineHeight: hp(2.5),
    // minHeight: hp(12),
    // borderRadius: wp(2),
    paddingVertical: hp(1.23),
    borderBottomWidth: wp(0.2),
    borderBottomColor: colors.black,
    // paddingHorizontal: wp(2.66),
    // backgroundColor: colors.lightgrey,
  },
  yellowStar: {
    width: wp(10.5),
    height: wp(10.5),
    resizeMode: 'contain',
  },
});
