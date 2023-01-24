import React from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {CommonButton} from '../index';
import {icons, string, colors, fontSize, hp, wp} from '../../helper/index';

// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   scopes: ['email'],
//   offlineAccess: true,
//   webClientId:
//     '143151469788-8co7l023m1glf87btsebv46925kqam74.apps.googleusercontent.com',
// });

const LoginModal = ({isVisible, onBackdropPress, onClosePress}) => {
  const onGooglePress = async () => {
    // await GoogleSignin.hasPlayServices();
    // const {idToken} = await GoogleSignin.signIn();
    // const credential = auth.GoogleAuthProvider.credential(idToken);
    // let rnFirebase = await auth().signInWithCredential(credential);
    // console.log('Called GoogleSignin', rnFirebase);
  };

  return (
    <Modal
      visible={isVisible}
      style={styles.modalView}
      animationType="slide"
      onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <SafeAreaView />
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
          onPress={onGooglePress}
          title={string.googleLogin}
          additionalBtnStyle={styles.googleBtn}
          additionalTitleStyle={styles.googleText}
        />
      </View>
    </Modal>
  );
};

export default LoginModal;

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
