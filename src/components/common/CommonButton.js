import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {Shadow} from '../index';
import {fontSize, hp, wp, colors} from '../../helper/index';

const CommonButton = ({
  title,
  isIcon,
  source,
  onPress,
  additionalBtnStyle,
  additionalTitleStyle,
}) => {
  return (
    <Shadow>
      <TouchableOpacity
        style={[styles.btnStyle, additionalBtnStyle]}
        onPress={onPress}>
        <View style={styles.subBtnView}>
          {isIcon && <Image source={source} style={styles.iconStyle} />}
          <Text style={[styles.btnText, additionalTitleStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  btnStyle: {
    height: hp(5),
    width: wp(90),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.btnBlue,
  },
  btnText: {
    fontWeight: '800',
    alignSelf: 'center',
    color: colors.white,
    fontSize: fontSize(16),
  },
  subBtnView: {
    flexDirection: 'row',
  },
  iconStyle: {
    width: wp(5.33),
    height: wp(5.33),
    marginRight: wp(8),
    resizeMode: 'contain',
  },
});
