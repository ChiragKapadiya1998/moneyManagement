import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {colors, icons, string, fontSize, hp, wp} from '../../helper/index';
import ChartModal from '../modals/ChartModal';
import CategoriesModal from '../modals/CategoriesModal';
import ExportModal from '../modals/ExportModal';
import SettingModal from '../modals/SettingModal';
import RatingModal from '../modals/RatingModal';
import AboutModal from '../modals/AboutModal';
import DrawerItem from './DrawerItem';

const CustomDrawer = props => {
  const [chartModal, setChartModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [exportModal, setExportModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);

  const onChartPress = () => {
    props.navigation.closeDrawer();
    setTimeout(() => {
      setChartModal(true);
    }, 0);
  };
  const onCategoryPress = () => {
    props.navigation.closeDrawer();
    setTimeout(() => {
      setCategoryModal(true);
    }, 100);
  };
  const onExportPress = () => {
    props.navigation.closeDrawer();
    setTimeout(() => {
      setExportModal(true);
    }, 100);
  };
  const onSettingPress = () => {
    props.navigation.closeDrawer();
    setTimeout(() => {
      setSettingModal(true);
    }, 100);
  };
  const onRatingPress = () => {
    props.navigation.closeDrawer();
    setTimeout(() => {
      setRatingModal(true);
    }, 100);
  };
  const onAboutPress = () => {
    props.navigation.closeDrawer();
    setTimeout(() => {
      setAboutModal(true);
    }, 100);
  };

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentContainerStyle}>
        <TouchableOpacity style={styles.headerView}>
          <Image source={icons.profile} style={styles.profileImage} />
          <Text style={styles.nameText}>{string.signIn}</Text>
        </TouchableOpacity>
        <View style={styles.itemListView}>
          {/* <DrawerItemList {...props} /> */}
          <DrawerItem
            title={'Chart'}
            onPress={onChartPress}
            source={icons.chart}
            tintColor={colors.purple}
            chart
          />
          <DrawerItem
            title={'Categories'}
            onPress={onCategoryPress}
            source={icons.category}
            tintColor={colors.lightred}
          />
          <DrawerItem
            title={'Export'}
            onPress={onExportPress}
            source={icons.export}
            tintColor={colors.btnBlue}
          />
          <DrawerItem
            title={'Settings'}
            onPress={onSettingPress}
            source={icons.setting}
            tintColor={colors.lightGreen}
          />
          <DrawerItem
            title={'Rate Us'}
            onPress={onRatingPress}
            source={icons.star}
            tintColor={colors.yellow}
          />
          <DrawerItem
            title={'About'}
            onPress={onAboutPress}
            source={icons.info}
            tintColor={colors.skyblue}
          />
        </View>
      </DrawerContentScrollView>
      <ChartModal
        isVisible={chartModal}
        onClosePress={() => setChartModal(false)}
      />
      <CategoriesModal
        isVisible={categoryModal}
        onBackPress={() => setCategoryModal(false)}
      />
      <ExportModal
        isVisible={exportModal}
        onClosePress={() => setExportModal(false)}
      />
      <SettingModal
        isVisible={settingModal}
        onClosePress={() => setSettingModal(false)}
      />
      <RatingModal
        isVisible={ratingModal}
        onClosePress={() => setRatingModal(false)}
      />
      <AboutModal
        isVisible={aboutModal}
        onOkPress={() => setAboutModal(false)}
        onBackdropPress={() => setAboutModal(false)}
      />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: colors.title,
  },
  headerView: {
    padding: wp(5.33),
  },
  profileImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(100),
  },
  nameText: {
    paddingTop: hp(1.23),
    fontSize: fontSize(16),
    color: colors.darkBrown,
  },
  itemListView: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
