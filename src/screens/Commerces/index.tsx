import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import Cash from '@assets/img/cash.png'
import Btc from '@assets/img/btc.png'
import Card from '@assets/img/card.png'
import Mobile from '@assets/img/mobile.png'
import Like from '@assets/img/heart.png'
import Star from '@assets/img/star.png'
import { useTheme } from 'providers'
import { styles } from './styles'

const Commerce = ({ route }: any) => {
  const { title } = route.params
  const navigation = useNavigation()
  const { colors } = useTheme()
  const data = [
    { commerceName: 'Casa velatoria FASMIJ' },
    { commerceName: 'Hispania Funeral' },
    { commerceName: 'Nombre del Comercio' },
  ]
  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>◀</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          {title}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.commerceName}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.commerceItem}
            onPress={() =>
              navigation.navigate('ServiceOfCommerce', {
                title: item.commerceName,
              })
            }
          >
            <Text
              style={[
                styles.logo,
                {
                  backgroundColor: colors.secundary,
                  color: colors.secundaryText,
                },
              ]}
            >
              Logo del comercio
            </Text>
            <View>
              <Text style={[styles.commerceName, { color: colors.text }]}>
                {item.commerceName}
              </Text>
              <Text style={[styles.payMethod, { color: colors.text }]}>
                Forma de pago
              </Text>
              <View style={styles.payImg}>
                <Image source={Cash} style={{ width: 23, height: 13 }} />
                <Image source={Btc} style={{ width: 10, height: 17 }} />
                <Image source={Card} style={{ width: 20, height: 14 }} />
                <Image source={Mobile} style={{ width: 10, height: 18 }} />
              </View>
            </View>
            <View style={styles.like}>
              <Image source={Like} style={[{ width: 20, height: 20 }]} />
              <Image source={Star} style={[{ width: 20, height: 20 }]} />
            </View>
          </TouchableOpacity>
        )}
        style={[styles.root, { backgroundColor: colors.background }]}
      />
    </ScrollView>
  )
}

export default Commerce
