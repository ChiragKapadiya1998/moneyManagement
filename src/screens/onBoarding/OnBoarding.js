import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../helper/colorContant';
import {string} from '../../helper/stringConstant';
import {fontSize, hp, wp} from '../../helper/globalConstant';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../components/CommonButton';
import LoginModal from '../../components/modals/LoginModal';

const OnBoarding = () => {
  const {navigate} = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      {currentIndex < 2 ? (
        <TouchableOpacity
          style={styles.skipBtn}
          onPress={() => navigate('Home')}>
          <Text style={styles.skipText}>{string.skip}</Text>
        </TouchableOpacity>
      ) : null}

      <Swiper
        loop={false}
        index={currentIndex}
        onIndexChanged={currentIndex => {
          setCurrentIndex(currentIndex);
        }}
        dot={<View style={styles.inActivedot} />}
        activeDot={<View style={styles.activeDot} />}>
        {/* //onboarding1 */}
        <View style={styles.container}>
          <Text style={styles.onBoardingTitle}>{string.onBoardingTitle1}</Text>
          <Text style={styles.onBoardingDesc}>{string.onBoardingDesc1}</Text>
        </View>

        {/* onboarding2 */}
        <View style={styles.container}>
          <Text style={styles.onBoardingTitle}>{string.onBoardingTitle2}</Text>
          <Text style={styles.onBoardingDesc}>{string.onBoardingDesc2}</Text>
        </View>

        {/* onboarding3 */}
        <View style={styles.container}>
          <Text style={styles.onBoardingTitle}>{string.onBoardingTitle3}</Text>
          <Text style={styles.onBoardingDesc}>{string.onBoardingDesc3}</Text>
          <CommonButton
            additionalBtnStyle={styles.signInBtn}
            title={string.signIn}
            onPress={handleLoginModal}
          />
          <TouchableOpacity
            style={styles.notNow}
            onPress={() => navigate('Home')}>
            <Text style={styles.notNowText}>{string.notNow}</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
      <LoginModal isVisible={showLoginModal} onClosePress={handleLoginModal} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onBoardingTitle: {
    color: colors.black,
    fontSize: fontSize(20),
  },
  onBoardingDesc: {
    color: colors.black,
    fontSize: fontSize(15),
    paddingTop: hp(2),
  },
  skipBtn: {
    height: hp(2.5),
    width: wp(10),
    backgroundColor: colors.lightgrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(100),
    position: 'absolute',
    top: hp(6),
    right: wp(5),
    zIndex: 1,
  },
  skipText: {
    color: colors.grey,
    fontSize: fontSize(13),
  },
  inActivedot: {
    backgroundColor: colors.lightgrey,
    width: wp(1.6),
    height: wp(1.6),
    borderRadius: wp(100),
    marginHorizontal: wp(0.8),
    bottom: hp(3),
  },
  activeDot: {
    backgroundColor: colors.title,
    width: wp(2.6),
    height: wp(2.6),
    borderRadius: wp(100),
    marginHorizontal: wp(0.8),
    bottom: hp(3),
  },

  notNow: {
    marginTop: hp(3),
  },
  notNowText: {
    color: colors.grey,
    fontSize: fontSize(15),
    fontWeight: '800',
  },
  signInBtn: {
    marginTop: hp(40),
  },
});
