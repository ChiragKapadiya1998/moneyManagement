import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
// import Modal from 'react-native-modal';
import {colors, fontSize, hp, icons, wp} from '../../helper';

const MonthYearPicker = ({onChangeYear, onChangeMonth, isShow, close}) => {
  const month_data = [
    {key: 1, name: 'Jan'},
    {key: 2, name: 'Feb'},
    {key: 3, name: 'Mar'},
    {key: 4, name: 'Apr'},
    {key: 5, name: 'May'},
    {key: 6, name: 'Jun'},
    {key: 7, name: 'Jul'},
    {key: 8, name: 'Aug'},
    {key: 9, name: 'Sep'},
    {key: 10, name: 'Oct'},
    {key: 11, name: 'Nov'},
    {key: 12, name: 'Dec'},
  ];

  const {width, height} = Dimensions.get('window');

  const [month, setMonth] = useState(month_data[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());

  //   useEffect(() => {
  //     onChangeYear(year);
  //     onChangeMonth(month_data[new Date().getMonth()]);
  //   });

  return (
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={isShow}
    //   onRequestClose={close}>
    //   <TouchableHighlight
    //     style={{flex: 1.5, backgroundColor: 'rgba(0,0,0,0.3)'}}
    //     onPress={close}>
    //     <View />
    //   </TouchableHighlight>
    <View
      style={{backgroundColor: 'white', position: 'absolute', top: hp(12.7)}}>
      <View style={styles.yearContainer}>
        <TouchableOpacity
          onPress={() => {
            setYear(year - 1);
            onChangeYear(year - 1);
          }}>
          <Image source={icons.leftArrow} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.yearLabel}>{year}</Text>
        <TouchableOpacity
          onPress={() => {
            setYear(year + 1);
            onChangeYear(year + 1);
          }}>
          <Image source={icons.rightArrow} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.monthContainer}>
        {month_data.map((item, index) => (
          <View
            style={[
              styles.month,
              {
                width: width / 6,
                height: width / 6,
                borderRadius: wp(100),
                backgroundColor: colors.white,
              },
            ]}>
            <TouchableOpacity
              key={index}
              onPress={() => {
                setMonth(item);
                onChangeMonth(item);
              }}
              style={{
                height: wp(10),
                width: wp(10),
                borderRadius: wp(100),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  item.key == month.key ? colors.title : colors.white,
              }}>
              <Text
                style={{
                  fontWeight: item.key == month.key ? '700' : '400',
                  color: colors.black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
    // </Modal>
  );
};

const styles = {
  yearContainer: {
    height: hp(5),
    padding: wp(2.66),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: wp(0.2),
    justifyContent: 'space-between',
    borderBottomColor: colors.lightgrey,
  },

  monthContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },

  month: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  yearLabel: {
    fontSize: fontSize(16),
  },
  arrowIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
};

export default MonthYearPicker;
