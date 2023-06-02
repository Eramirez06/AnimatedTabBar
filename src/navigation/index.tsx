import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators';

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
