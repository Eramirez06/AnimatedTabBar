import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Routes} from 'navigation/types';
import {navigate} from 'utils/navigationService';

interface Props {
  isSelected?: boolean;
  route: keyof Routes;
}

const ItemDrawer = ({isSelected, route}: Props) => {
  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <TouchableOpacity
      onPress={handleNavigation}
      activeOpacity={0.7}
      style={[styles.container, isSelected && styles.selected]}>
      <Text style={[styles.title, isSelected && styles.textSelected]}>
        {route}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemDrawer;
