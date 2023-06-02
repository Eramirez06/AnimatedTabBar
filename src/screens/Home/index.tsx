import React from 'react';
import styles from './styles';
import Header from 'components/Header';
import DrawerView from 'navigation/navigators/components/DrawerView';
import Button from 'components/Button';
import {navigate} from 'utils/navigationService';

const Home = () => {
  return (
    <DrawerView style={styles.container}>
      <Header />
      <Button title="Next Screen" onPress={() => navigate('TabScreen1')} />
    </DrawerView>
  );
};
export default Home;
