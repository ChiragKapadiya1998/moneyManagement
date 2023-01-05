import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Shadow} from '../index';
import {colors, fontSize, hp, wp, isIos} from '../../helper/index';

const RoundButton = ({onPress}) => {
  return (
    <Shadow>
      <View style={styles.container}>
        <TouchableOpacity style={styles.roundButton} onPress={onPress}>
          <Text style={styles.plusStyle}>{'+'}</Text>
        </TouchableOpacity>
      </View>
    </Shadow>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: wp(5),
    position: 'absolute',
    top: isIos ? hp(88) : hp(85),
  },
  roundButton: {
    width: wp(15),
    height: wp(15),
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
    backgroundColor: colors.title,
  },
  plusStyle: {
    color: colors.white,
    fontSize: fontSize(30),
  },
});
