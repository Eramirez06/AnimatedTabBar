import React from 'react';
import styles from './styles';
import Header from 'components/Header';
import Button from 'components/Button';
import DrawerView from 'navigation/navigators/components/DrawerView';
import {goBack} from 'utils/navigationService';

const TabScreen1 = () => {
  return (
    <DrawerView style={styles.container}>
      <Header />
      <Button title="Prev Screen" onPress={goBack} />
    </DrawerView>
  );
};
export default TabScreen1;
