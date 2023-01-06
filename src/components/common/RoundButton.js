import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors, fontSize, hp, wp, isIos} from '../../helper/index';

const RoundButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.roundButton, styles.shadowStyle]}
      onPress={onPress}>
      <Text style={styles.plusStyle}>{'+'}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  roundButton: {
    zIndex: 1,
    right: wp(5),
    width: wp(15),
    height: wp(15),
    position: 'absolute',
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
    top: isIos ? hp(88) : hp(85),
    backgroundColor: colors.title,
  },
  plusStyle: {
    color: colors.white,
    fontSize: fontSize(30),
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    shadowColor: colors.grey,
    elevation: 10,
  },
});

// import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
// import React from 'react';

// const RoundButton = ({onPress, source, isImage, btnText}) => {
//   return (
//     <TouchableOpacity
//       style={isImage ? styles.addButtonView1 : styles.addButtonView2}
//       onPress={onPress}>
//       {isImage ? (
//         <Image source={source} style={styles.addButton} />
//       ) : (
//         <Text style={styles.submitText}>{btnText}</Text>
//       )}
//     </TouchableOpacity>
//   );
// };

// export default RoundButton;

// const styles = StyleSheet.create({
//   addButtonView1: {
//     height: 80,
//     width: 80,
//     marginTop: 680,
//     marginLeft: 320,
//     borderRadius: 40,
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addButtonView2: {
//     height: 80,
//     width: 80,
//     marginTop: 680,
//     marginLeft: 320,
//     borderRadius: 40,
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   addButton: {
//     height: 90,
//     width: 90,
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 13,
//   },
// });
