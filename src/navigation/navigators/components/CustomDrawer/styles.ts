import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 5,
    backgroundColor: '#191426',
  },
  elements: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50,
    ...Platform.select({
      ios: {
        marginTop: 90,
      },
      android: {
        marginTop: 80,
      },
    }),
  },
  separator: {
    width: '100%',
    backgroundColor: '#fff',
    height: 0.5,
    marginBottom: 30,
  },
});

export default styles;
