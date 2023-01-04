import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import {Calc} from '../components';
import DrawerNavigation from './DrawerNavigation';
import Practise from '../screens/Practise';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="onBoarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="onBoarding" component={OnBoarding} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
      <Stack.Screen name="Calc" component={Calc} />
      {/* <Stack.Screen name="Practise" component={Practise} /> */}
    </Stack.Navigator>
  );
};

export default Navigation;
