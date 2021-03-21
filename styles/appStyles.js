import theme from './theme.style.js';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: theme.SECONDARY_COLOR,
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  selectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
    textAlign: 'center',
  },
  items: {
    paddingTop: 20,
    paddingHorizontal: 20,
    maxHeight:'68vh', 
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    color: theme.SECONDARY_COLOR,
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText: {
    textAlign: 'center',
    color: theme.SECONDARY_COLOR,
  },
  devider: {
    justifyContent: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
    marginTop: 10,
    opacity: 0.5,
  },

});

export default styles;