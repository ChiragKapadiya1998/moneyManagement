import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Calculator} from '../../react-native-calculator';
import {wp} from '../helper/globalConstant';

const Calc = () => {
  const [calculatedNumber, setCalculatedNumber] = useState(0);
  return (
    <Calculator
      style={styles.calcStyle}
      numericButtonColor="black"
      value={calculatedNumber}
      onTextChange={number => setCalculatedNumber(number)}
    />
  );
};

export default Calc;

const styles = StyleSheet.create({
  calcStyle: {
    flex: 0.35,
    width: wp(100),
    justifyContent: 'flex-end',
  },
});

// const Calc = () => {
//   const [calculatedNumber, setCalculatedNumber] = useState(0);
//   return (
//     // <Modal isVisible={true} style={{margin: 0, justifyContent: 'flex-end'}}>
//     // <View
//     //   style={{
//     //     backgroundColor: 'white',
//     //     // alignSelf: 'center',
//     //     flex: 1,
//     //     width: wp(100),
//     //     margin: 0,
//     //     justifyContent: 'flex-end',
//     //   }}>
//     <Calculator
//       style={{
//         flex: 0.35,
//         width: wp(100),
//         justifyContent: 'flex-end',
//       }}
//       // hideDisplay
//       // modalBackdropStyle={{backgroundColor: 'transparent'}}
//       numericButtonColor="black"
//       displayColor="black"
//       value={calculatedNumber}
//       onTextChange={number => setCalculatedNumber(number)}
//     />
//     // </View>
//     // </Modal>
//   );
// };
