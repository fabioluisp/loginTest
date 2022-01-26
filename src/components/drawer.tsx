import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Tela1" component={Home} />
      <Drawer.Screen name="Tela2" component={Home} />
      <Drawer.Screen name="Tela3" component={Home} />
    </Drawer.Navigator>
  );
}
