import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';

import {CommonButton} from '../index';
import {icons, string, colors, fontSize, hp, wp} from '../../helper/index';

const SettingModal = ({isVisible, onBackdropPress, onClosePress}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalView}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropColor={colors.white}
      onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClosePress}>
          <Image source={icons.close} style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.mainText}>{string.moneyManager}</Text>
        <CommonButton
          isIcon
          source={icons.facebook}
          title={string.facebookLogin}
          additionalBtnStyle={styles.fbBtn}
          additionalTitleStyle={styles.fbText}
        />
        <CommonButton
          isIcon
          source={icons.google}
          title={string.googleLogin}
          additionalBtnStyle={styles.googleBtn}
          additionalTitleStyle={styles.googleText}
        />
      </View>
    </Modal>
  );
};

export default SettingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  closeBtn: {
    top: hp(3.69),
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
  mainText: {
    marginTop: hp(30),
    color: colors.black,
    fontSize: fontSize(30),
  },
  fbBtn: {
    marginTop: hp(40),
    backgroundColor: colors.fbMain,
  },
  fbText: {
    fontWeight: '500',
  },
  googleBtn: {
    marginTop: hp(1.5),
    backgroundColor: colors.lightgrey,
  },
  googleText: {
    fontWeight: '500',
    color: colors.black,
  },
});
