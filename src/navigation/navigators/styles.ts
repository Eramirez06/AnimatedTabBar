import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  stack: {
    flex: 1,
    overflow: 'hidden',
  },
  sceneContainer: {backgroundColor: '#191426'},
  drawerStyles: {
    flex: 1,
    width: '50%',
    backgroundColor: 'transparent',
  },
  drawerItem: {
    alignItems: 'flex-start',
    marginVertical: 0,
  },
  drawerLabel: {
    color: '#fff',
    marginLeft: 100,
  },
  btnOpen: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
  },
});

export default styles;
