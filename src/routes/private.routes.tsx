import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import Home from '@screens/Home'
import History from '@screens/History'
import Settings from '@screens/Settings'
import { useTheme } from 'native-base'

const Tab = createBottomTabNavigator()

export function PrivateRoutes() {
  const { colors, sizes } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.white[400],
        tabBarActiveTintColor: colors.green[500],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
