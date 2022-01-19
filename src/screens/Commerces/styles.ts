import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: '5%',
  },
  commerceItem: {
    flexDirection: 'row',
    position: 'relative',
    marginVertical: 15,
    padding: '5%',
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
  },
  logo: {
    width: 71,
    height: 71,
    marginRight: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
  },
  commerceName: {
    fontSize: 17,
  },
  payMethod: {
    fontSize: 15,
  },
  payImg: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  like: {
    flexDirection: 'row',
    position: 'absolute',
    right: 17,
    bottom: 17,
  },
})
