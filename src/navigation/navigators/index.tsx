import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';
import styles from './styles';
import CustomDrawer from './components/CustomDrawer';
import Cart from 'screens/Cart';
import Favorite from 'screens/Favorites';
import Orders from 'screens/Orders';
import Contacts from 'screens/Contacts';
import TabScreen1 from 'screens/TabScreen1';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabScreen1" component={TabScreen1} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      screenOptions={{
        drawerType: 'back',
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyles,
        drawerContentContainerStyle: styles.container,
        sceneContainerStyle: styles.sceneContainer,
        drawerActiveBackgroundColor: '#191426',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Tab"
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Cart"
        component={Cart}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Favorite"
        component={Favorite}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Orders"
        component={Orders}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
