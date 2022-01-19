import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Line from '@assets/img/linea.png'
import { styles } from './styles'
import { useState } from 'react'
import { useTheme } from '@providers'

const Plan = (props: any) => {
  const [visible, setVisible] = useState(false)
  const { colors } = useTheme()
  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.planButton}
      >
        <Text style={{ color: colors.primary, fontSize: 18 }}>
          {props.name}
        </Text>
      </TouchableOpacity>
      {visible && (
        <View style={styles.descriptionContent}>
          <Text style={[styles.titleDescription, { color: colors.primary }]}>
            Beneficios
          </Text>
          <Image style={styles.line} source={Line} />
          <Text style={[styles.description, { color: colors.primary }]}>
            {props.description}
          </Text>
          <TouchableOpacity
            style={[
              styles.suscribeButton,
              { backgroundColor: colors.secundary },
            ]}
          >
            <Text style={{ color: colors.secundaryText }}>
              Suscribirse al {props.name}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Plan
