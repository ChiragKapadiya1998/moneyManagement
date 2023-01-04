import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Shadow} from '../index';
import {colors, fontSize, hp, wp} from '../../helper/index';

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
    position: 'absolute',
    borderRadius: wp(100),
    justifyContent: 'center',
    backgroundColor: colors.title,
  },
  plusStyle: {
    color: colors.white,
    fontSize: fontSize(30),
  },
});
