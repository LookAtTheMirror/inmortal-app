import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    padding: '5%',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: '5%',
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
  serviceList: {
    margin: '5%',
  },
  serviceItem: {
    width: '100%',
    padding: 20,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  serviceName: {
    fontSize: 22,
  },
  serviceCost: {
    fontSize: 22,
    alignSelf: 'center',
    position: 'absolute',
    right: 20,
  },
  backgroundModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 35,
  },
  buttonModal: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 100,
  },
})
