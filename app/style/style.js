import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const style = StyleSheet.create({
  buttonContainer: {
    padding: 35,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    padding: 20,
    borderRadius: 20,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  image: {
    height: 125,
    width: 120,
    //flexGrow: 1,
    flexShrink: 1,
    borderWidth: 0.5,
    borderColor: 'black',
    //resizeMode: 'contain',
  },
  contianerImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Colors.lighter,
  },
  icon: {
    textAlign: 'center',
    fontSize: 40,
    color: '#b3b3b3',
  },
});
