import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',

    justifyContent: 'center',
    marginBottom: 10,
    paddingLeft: 30,
    borderRadius: 15,
  },
  selected: {
    backgroundColor: 'rgba(224, 76, 93, 0.2)',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
  textSelected: {
    color: 'rgba(178, 68, 81, 1)',
  },
});

export default styles;
