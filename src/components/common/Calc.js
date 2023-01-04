import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {Calculator} from '../../../react-native-calculator';

import {wp} from '../../helper/index';

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
