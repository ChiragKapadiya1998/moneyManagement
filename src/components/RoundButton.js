import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../helper/colorContant';
import {fontSize, hp, wp} from '../helper/globalConstant';
import Shadow from './Shadow';

const RoundButton = ({onPress}) => {
  return (
    <Shadow>
      <TouchableOpacity style={styles.roundButton} onPress={onPress}>
        <Text style={styles.plusStyle}>{'+'}</Text>
      </TouchableOpacity>
    </Shadow>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  roundButton: {
    top: hp(62),
    right: wp(5),
    width: wp(15),
    height: wp(15),
    alignItems: 'center',
    borderRadius: wp(100),
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.title,
  },
  plusStyle: {
    color: colors.white,
    fontSize: fontSize(30),
  },
});
