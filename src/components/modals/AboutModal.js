import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';

import {string, colors, fontSize, hp, wp} from '../../helper/index';

const AboutModal = ({isVisible, onBackdropPress, onOkPress}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalView}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.4}
      onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.mainText}>{string.moneyManager}</Text>
        <Text style={styles.subText}>{'Version: 1.2.6'}</Text>
        <Text style={styles.subText}>{'Version code: 9'}</Text>
        <TouchableOpacity style={styles.okBtn} onPress={onOkPress}>
          <Text style={styles.okText}>{'OK'}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AboutModal;

const styles = StyleSheet.create({
  container: {
    width: wp(85),
    borderRadius: 4,
    padding: wp(5.33),
    backgroundColor: colors.white,
  },
  modalView: {
    alignItems: 'center',
  },
  mainText: {
    color: colors.black,
    fontSize: fontSize(22),
    marginBottom: hp(1.23),
  },
  subText: {
    marginTop: hp(1),
    color: colors.black,
    fontSize: fontSize(14),
  },
  okBtn: {
    marginTop: hp(1.5),
    alignItems: 'flex-end',
  },
  okText: {
    fontWeight: '700',
    color: colors.title,
    fontSize: fontSize(14),
  },
});
