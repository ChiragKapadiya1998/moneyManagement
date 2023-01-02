import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import CommonButton from '../CommonButton';
import {icons} from '../../helper/iconConstant';
import {string} from '../../helper/stringConstant';
import {colors} from '../../helper/colorContant';
import {fontSize, hp, wp} from '../../helper/globalConstant';

const LoginModal = ({isVisible, onBackdropPress, onClosePress}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onBackdropPress}
      backdropColor={colors.white}
      style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClosePress}>
          <Image source={icons.close} style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.mainText}>{string.moneyManager}</Text>
        <CommonButton
          additionalBtnStyle={{
            backgroundColor: colors.fbMain,
            marginTop: hp(40),
          }}
          additionalTitleStyle={{fontWeight: '500'}}
          title={string.facebookLogin}
          isIcon
          source={icons.facebook}
        />
        <CommonButton
          additionalBtnStyle={{
            backgroundColor: colors.lightgrey,
            marginTop: hp(1.5),
          }}
          additionalTitleStyle={{fontWeight: '500', color: colors.black}}
          title={string.googleLogin}
          isIcon
          source={icons.google}
        />
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  closeBtn: {
    position: 'absolute',
    top: hp(3.69),
    right: wp(2.67),
    padding: wp(1.6),
    borderRadius: wp(100),
  },
  closeIcon: {
    height: wp(5.33),
    width: wp(5.33),
    tintColor: colors.grey,
  },
  mainText: {
    color: colors.black,
    fontSize: fontSize(30),
    marginTop: hp(30),
  },
});
