import React, {useMemo} from 'react';
import {Text, StatusBar, View} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import ItemDrawer from '../ItemDrawer';
const CustomDrawer = ({navigation}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const currentRoute = navigation.getState();
  const currentRouteName = useMemo(
    () => currentRoute?.routeNames[currentRoute?.index],
    [currentRoute],
  );

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.container}>
      <StatusBar barStyle={isDrawerOpen ? 'light-content' : 'dark-content'} />
      <Text style={styles.title}>Emilio</Text>
      <View style={styles.elements}>
        <ItemDrawer isSelected={currentRouteName === 'Tab'} route="Home" />
        <ItemDrawer isSelected={currentRouteName === 'Cart'} route="Cart" />
        <ItemDrawer
          isSelected={currentRouteName === 'Favorite'}
          route="Favorite"
        />
        <ItemDrawer isSelected={currentRouteName === 'Orders'} route="Orders" />
        <View style={styles.separator} />
        <ItemDrawer route="Sign Out" />
      </View>
    </SafeAreaView>
  );
};
export default CustomDrawer;
