import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {Shadow} from '../index';
import {icons, colors, fontSize, hp, wp} from '../../helper/index';

const Header = ({
  title,
  isDate,
  isCalendar,
  leftSource,
  customTitle,
  rightSource,
  onLeftPress,
  onDownPress,
  onRightPress,
  rightIconStyle,
}) => {
  return (
    <Shadow>
      <View style={styles.container}>
        <TouchableOpacity onPress={onLeftPress}>
          <Image source={leftSource} style={styles.iconLeft} />
        </TouchableOpacity>
        {isDate ? (
          <TouchableOpacity
            onPress={onDownPress}
            style={{flexDirection: 'row'}}>
            <Text style={styles.title}>{title}</Text>
            <Image
              source={isCalendar ? icons.upArrow : icons.dropDown}
              style={styles.dropDown}
            />
          </TouchableOpacity>
        ) : (
          <Text style={[styles.title, customTitle]}>{title}</Text>
        )}
        <TouchableOpacity style={styles.rightIconView} onPress={onRightPress}>
          <Image
            source={rightSource}
            style={[styles.iconRight, rightIconStyle]}
          />
        </TouchableOpacity>
      </View>
    </Shadow>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    width: wp(100),
    paddingLeft: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  iconLeft: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  title: {
    fontWeight: '700',
    paddingLeft: wp(6),
    color: colors.black,
    fontSize: fontSize(18),
  },
  iconRight: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  dropDown: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  rightIconView: {
    right: wp(5),
    padding: wp(1),
    position: 'absolute',
  },
});
