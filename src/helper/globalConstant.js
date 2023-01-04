import {Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = val => {
  return widthPercentageToDP(val);
};

export const hp = val => {
  return heightPercentageToDP(val);
};

export const fontSize = val => RFValue(val, 812);

export const statusBarHeight = getStatusBarHeight();

export const isIos = Platform.OS === 'ios' ? true : false;

export const deviceType = Platform.OS === 'ios' ? 'ios' : 'android';
