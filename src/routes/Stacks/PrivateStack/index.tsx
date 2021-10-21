import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainTab } from '../../Tabs'

const Stack = createNativeStackNavigator()

export const PrivateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        animation: 'slide_from_bottom',
        headerShown: false,
      }}
      initialRouteName="main"
    >
      <Stack.Screen
        name="main"
        component={MainTab}
      />
    </Stack.Navigator>
  )
}

export default PrivateStack
