import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators';
import {navigationRef} from 'utils/navigationService';

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
