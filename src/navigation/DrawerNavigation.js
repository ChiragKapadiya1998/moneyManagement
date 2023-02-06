import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/home/Home';

import {CustomDrawer} from '../components';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        // overlayColor: 'green',
        unmountOnBlur: true,
      }}>
      <Drawer.Screen name="Homes" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
