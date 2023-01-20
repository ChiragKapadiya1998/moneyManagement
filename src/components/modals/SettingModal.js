import React, {useState} from 'react';
import {View, Modal, StyleSheet, SafeAreaView} from 'react-native';

import {icons, string, colors, fontSize, hp, wp} from '../../helper/index';
import Shadow from '../common/Shadow';
import Header from '../common/Header';

const SettingModal = ({isVisible, onClosePress}) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <SafeAreaView />
        <Shadow>
          <Header
            title={string.settings}
            onLeftPress={onClosePress}
            leftSource={icons.backArrow}
          />
        </Shadow>
        <View style={{}}></View>
      </View>
    </Modal>
  );
};

export default SettingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
