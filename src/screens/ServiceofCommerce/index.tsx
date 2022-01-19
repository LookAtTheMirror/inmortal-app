import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native'
import Cash from '@assets/img/cash.png'
import Btc from '@assets/img/btc.png'
import Card from '@assets/img/card.png'
import Mobile from '@assets/img/mobile.png'
import Like from '@assets/img/heart.png'
import Star from '@assets/img/star.png'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@providers'
import { styles } from './styles'

const ServiceofCommerce = ({ route }: any) => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const { title } = route.params
  const [toggleModal, setToggleModal] = useState(false)
  const data = [
    {
      key: '1',
      name: 'Servicio',
      cost: '$$$',
    },
    {
      key: '2',
      name: 'Servicio',
      cost: '$$$',
    },
    {
      key: '3',
      name: 'Servicio',
      cost: '$$$',
    },
  ]
  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>◀</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.logo,
            { backgroundColor: colors.secundary, color: colors.secundaryText },
          ]}
        >
          Logo del comercio
        </Text>
        <View>
          <Text style={[styles.commerceName, { color: colors.text }]}>
            {title}
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
      </View>
      <View style={styles.serviceList}>
        <Text style={{ color: colors.text, fontSize: 20 }}>
          Tipo de servicio
        </Text>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() => {
                setToggleModal(!toggleModal)
              }}
            >
              <Text style={[styles.serviceName, { color: colors.text }]}>
                {item.name}#{item.key}
              </Text>
              <Text style={[styles.serviceCost, { color: colors.text }]}>
                {item.cost}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.serviceList}>
        <Text style={{ color: colors.text, fontSize: 20 }}>
          Tipo de servicio
        </Text>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() => {
                setToggleModal(!toggleModal)
              }}
            >
              <Text style={[styles.serviceName, { color: colors.text }]}>
                {item.name}#{item.key}
              </Text>
              <Text style={[styles.serviceCost, { color: colors.text }]}>
                {item.cost}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal transparent visible={toggleModal}>
        <View style={styles.backgroundModal}>
          <View
            style={[
              styles.modalContainer,
              { backgroundColor: colors.background },
            ]}
          >
            <Text style={{ color: colors.text, fontSize: 20 }}>
              Por favor verifique que tenga los siguientes requisitos:
            </Text>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ color: colors.text, fontSize: 20 }}>
                Certificado de difusión
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ color: colors.text, fontSize: 20 }}>
                Seleccione el motivo de desesion
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ color: colors.text, fontSize: 20 }}>
                ----------------------------------------
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ color: colors.text, fontSize: 20 }}>
                ----------------------------------------
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.buttonModal,
                { backgroundColor: colors.secundary },
              ]}
              onPress={() => {
                navigation.navigate('Bill')
                setToggleModal(!toggleModal)
              }}
            >
              <Text style={{ color: colors.secundaryText, fontSize: 17 }}>
                Proseguir con la obtencion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

export default ServiceofCommerce
