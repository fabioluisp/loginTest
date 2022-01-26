import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Home from '../pages/Home';
import DrawerMenu from '../../components/drawer';

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
};

export default AppRoutes;
