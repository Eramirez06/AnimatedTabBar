import React from 'react';
import styles from './style';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

interface Props {
  children: React.ReactNode;
  style?: any;
}

const DrawerView = ({children, style}: Props) => {
  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 16]);
    return {
      transform: [{scale}],
      borderRadius,
    };
  });
  return (
    <Animated.View style={[styles.container, viewStyles, style]}>
      {children}
    </Animated.View>
  );
};

export default DrawerView;
