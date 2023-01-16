import React from 'react'
import { useTheme, Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { PrivateRoutes } from './private.routes'
import { auth } from '../../firebaseConfig'
import IUser from '../types/User'

const Routes = () => {
  const [user, setUser] = React.useState<IUser>()
  const { colors } = useTheme()
  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  function onAuthStateChanged(userInfo: any) {
    setUser(userInfo)
  }

  React.useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer>
        {!user ? <AuthRoutes /> : <PrivateRoutes />}
      </NavigationContainer>
    </Box>
  )
}

export default Routes
