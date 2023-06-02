import React from 'react';
import Header from 'components/Header';
import DrawerView from 'navigation/navigators/components/DrawerView';
import styles from './styles';

const Orders = () => {
  return (
    <DrawerView style={styles.container}>
      <Header />
    </DrawerView>
  );
};
export default Orders;
