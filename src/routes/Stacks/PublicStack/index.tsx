import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '@screens'

const Stack = createNativeStackNavigator()

export const PublicStack = () => (
  <Stack.Navigator
    screenOptions={{
      animationTypeForReplace: 'pop',
      animation: 'slide_from_bottom',
      headerShown: false,
    }}
    initialRouteName="Welcome"
  >
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
)

export default PublicStack
