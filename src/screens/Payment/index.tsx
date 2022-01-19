import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Line from '@assets/img/linea.png'
import { useTheme } from '@providers'
import { styles } from './styles'
import { PaymentCard } from 'components'

const Payment = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const data = [
    {
      key: '1',
      buttonName: 'transferencia bancaria internacional',
      details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      key: '2',
      buttonName: 'transferencia bancaria nacional',
      details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      key: '3',
      buttonName: 'Zelle',
      details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      key: '4',
      buttonName: 'Pago movil',
      details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ]
  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>◀</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Regresar
        </Text>
      </View>
      <Text style={[styles.amountPayable, { color: colors.text }]}>
        Monto a pagar: $$$
      </Text>
      <Image style={styles.line} source={Line} />
      <View>
        <Text style={[styles.amountPayable2, { color: colors.text }]}>
          FORMAS DE PAGO
        </Text>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <PaymentCard nameButton={item.buttonName} details={item.details} />
          )}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: colors.text, fontSize: 17 }}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.payButton, { backgroundColor: colors.secundary }]}
          onPress={() => navigation.navigate('Social')}
        >
          <Text style={{ color: colors.secundaryText, fontSize: 17 }}>
            Finalizar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Payment
