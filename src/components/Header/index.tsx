import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {openDrawer} from 'utils/navigationService';
import Menu from 'assets/menu.png';
import styles from './styles';

const Header = () => {
  return (
    <SafeAreaView edges={['right', 'top', 'left']}>
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer} style={styles.button}>
          <Image source={Menu} style={styles.iconMenu} />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
