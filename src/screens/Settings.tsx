import React from 'react'

import { Text, View, Button } from 'native-base'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

const Settings: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Button onPress={handleLogout}>
        <Text color="#fff">Sair</Text>
      </Button>
    </View>
  )
}

export default Settings
