import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, icons, string, fontSize, hp, wp} from '../../helper/index';

const DrawerItem = ({title, onPress, source, tintColor, chart}) => {
  return (
    <TouchableOpacity
      style={chart ? styles.drawerChartBtn : styles.drawerBtn}
      onPress={onPress}>
      <Image
        source={source}
        style={[styles.iconStyle, {tintColor: tintColor}]}
      />
      <Text style={styles.drawerText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  iconStyle: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  drawerChartBtn: {
    padding: wp(4),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: wp(0.25),
    borderBottomColor: colors.lightgrey,
  },
  drawerBtn: {
    width: '100%',
    padding: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerText: {
    fontWeight: '500',
    paddingLeft: wp(4),
    fontSize: fontSize(16),
    color: colors.drawerText,
  },
});
