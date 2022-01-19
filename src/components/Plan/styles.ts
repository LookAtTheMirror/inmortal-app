import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  planButton: {
    marginHorizontal: '5%',
    marginTop: 10,
    padding: 18,
    width: '90%',
    height: 100,
    backgroundColor: '#ACEABC',
    justifyContent: 'flex-end',
    borderColor: 'black',
    borderWidth: 1,
  },
  line: {
    width: '110%',
    height: 6,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  descriptionContent: {
    marginHorizontal: '5%',
    padding: 18,
    backgroundColor: '#fff',
  },
  titleDescription: {
    fontSize: 17,
    alignSelf: 'center',
  },
  description: {
    lineHeight: 20,
    margin: 5,
  },
  suscribeButton: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
