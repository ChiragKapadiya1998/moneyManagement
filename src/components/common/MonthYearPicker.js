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
import {colors, fontSize, hp, icons, isIos, wp} from '../../helper';

const {width, height} = Dimensions.get('window');

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
    <View style={styles.container}>
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
          <View style={styles.month}>
            <TouchableOpacity
              key={index}
              onPress={() => {
                setMonth(item);
                onChangeMonth(item);
              }}
              style={[
                styles.monthOnPress,
                {
                  backgroundColor:
                    item.key == month.key ? colors.title : colors.white,
                },
              ]}>
              <Text
                style={{
                  color: colors.black,
                  fontWeight: item.key == month.key ? '700' : '400',
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
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    top: isIos ? hp(12.7) : hp(7.1),
  },
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  month: {
    width: width / 6,
    height: width / 6,
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  yearLabel: {
    color: colors.black,
    fontSize: fontSize(16),
  },
  arrowIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    tintColor: colors.grey,
  },
  monthOnPress: {
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
  },
};

export default MonthYearPicker;
