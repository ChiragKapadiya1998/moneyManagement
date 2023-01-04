import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

import {colors, string, fontSize, hp, wp} from '../../helper/index';
import {CommonButton, LoginModal} from '../../components/index';

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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  onBoardingTitle: {
    color: colors.black,
    fontSize: fontSize(20),
  },
  onBoardingDesc: {
    paddingTop: hp(2),
    color: colors.black,
    fontSize: fontSize(15),
  },
  skipBtn: {
    zIndex: 1,
    top: hp(6),
    right: wp(5),
    width: wp(10),
    height: hp(2.5),
    alignItems: 'center',
    position: 'absolute',
    borderRadius: wp(100),
    justifyContent: 'center',
    backgroundColor: colors.lightgrey,
  },
  skipText: {
    color: colors.grey,
    fontSize: fontSize(13),
  },
  inActivedot: {
    bottom: hp(3),
    width: wp(1.6),
    height: wp(1.6),
    borderRadius: wp(100),
    marginHorizontal: wp(0.8),
    backgroundColor: colors.lightgrey,
  },
  activeDot: {
    bottom: hp(3),
    width: wp(2.6),
    height: wp(2.6),
    borderRadius: wp(100),
    marginHorizontal: wp(0.8),
    backgroundColor: colors.title,
  },

  notNow: {
    marginTop: hp(3),
  },
  notNowText: {
    fontWeight: '800',
    color: colors.grey,
    fontSize: fontSize(15),
  },
  signInBtn: {
    marginTop: hp(40),
  },
});
