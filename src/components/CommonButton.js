import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../helper/colorContant';
import {fontSize, hp, wp} from '../helper/globalConstant';
import Shadow from './Shadow';

const CommonButton = ({
  additionalBtnStyle,
  additionalTitleStyle,
  onPress,
  title,
  isIcon,
  source,
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
    backgroundColor: colors.btnBlue,
    height: hp(5),
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: colors.white,
    fontSize: fontSize(16),
    fontWeight: '800',
    alignSelf: 'center',
  },
  subBtnView: {
    flexDirection: 'row',
  },
  iconStyle: {
    height: wp(5.33),
    width: wp(5.33),
    resizeMode: 'contain',
    marginRight: wp(8),
  },
});
