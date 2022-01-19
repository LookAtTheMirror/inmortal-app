import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from 'providers'
import Global from '@assets/img/global.png'
import GlobalDark from '@assets/img/global-dark.png'
import Social from '@assets/img/social.png'
import SocialDark from '@assets/img/social-dark.png'
import Emergency from '@assets/img/emergency.png'
import Services from '@assets/img/services.png'
import ServicesDark from '@assets/img/services-dark.png'
import Profile from '@assets/img/profile.png'
import ProfileDark from '@assets/img/profile-dark.png'

const Nav = [
  {
    key: 'Global',
    label: 'Global',
    icon: Global,
    iconDark: GlobalDark,
    route: 'Social',
  },
  {
    key: 'Personal',
    label: 'Personal',
    icon: Social,
    iconDark: SocialDark,
    route: 'Personal',
  },
  {
    key: 'Emergency',
    label: 'Emergency',
    icon: Emergency,
    iconDark: Emergency,
    route: 'Emergency',
  },
  {
    key: 'Services',
    label: 'Services',
    icon: Services,
    iconDark: ServicesDark,
    route: 'Services',
  },
  {
    key: 'Profile',
    label: 'Profile',
    icon: Profile,
    iconDark: ProfileDark,
    route: 'Profile',
  },
]

const MainTabComponent: FC<any> = ({ navigation, state }) => {
  const { colors } = useTheme()

  return (
    <View style={[styles.nav, { backgroundColor: colors?.primary }]}>
      {Nav.map((data: any, index: any) => {
        const { width, height } = Image.resolveAssetSource(data?.icon)
        const focused = state?.index === index

        return (
          <TouchableOpacity
            style={[
              styles.navItem,
              focused ? { backgroundColor: colors.tertiary } : {},

            ]}
            key={index}
            onPress={() => navigation.navigate(data.route)}
          >
            <Image
              style={{ width: width / 14, height: height / 14 }}
              source={focused ? data.iconDark : data.icon}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default MainTabComponent
