import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import Home from '../screens/home/Home';
import Login from '../screens/auth/Login';
import Calc from '../components/Calc';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onBoarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calc" component={Calc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
