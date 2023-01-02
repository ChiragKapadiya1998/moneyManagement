import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontSize, hp, wp} from '../helper/globalConstant';
import {colors} from '../helper/colorContant';
import {icons} from '../helper/iconConstant';
import Shadow from './Shadow';

const Header = ({
  title,
  isDate,
  leftSource,
  rightSource,
  onLeftPress,
  onDownPress,
  onRightPress,
}) => {
  return (
    <Shadow>
      <View style={styles.container}>
        <TouchableOpacity onPress={onLeftPress}>
          <Image source={leftSource} style={styles.iconLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {isDate && (
          <TouchableOpacity onPress={onDownPress}>
            <Image source={icons.dropDown} style={styles.dropDown} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.rightIconView} onPress={onRightPress}>
          <Image source={rightSource} style={styles.iconRight} />
        </TouchableOpacity>
      </View>
    </Shadow>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: wp(100),
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(4),
  },
  iconLeft: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  title: {
    color: colors.black,
    fontSize: fontSize(16),
    fontWeight: '700',
    paddingLeft: wp(5),
  },
  iconRight: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  dropDown: {
    height: wp(6),
    width: wp(6),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  rightIconView: {
    position: 'absolute',
    right: wp(5),
    padding: wp(1),
  },
});
