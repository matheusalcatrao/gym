import React from 'react'
import { VStack, Image, Text, Center, ScrollView } from 'native-base'
import auth from '@react-native-firebase/auth'
import { initializeApp } from 'firebase/app'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from '@components/Input'
import Button from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import { firebaseConfig } from '../../firebaseConfig'

const SignUp = () => {
  const navigation = useNavigation<AuthNavigationRoutesProps>()

  const handleLogin = () => {
    navigation.navigate('signIn')
  }

  const handleCreateAccount = async () => {
    try {
      await initializeApp(firebaseConfig)
      const email = 'matheusalcatrao@hotmail.com'
      const password = '12345'

      await auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.error('Error on handleCreateAccount: ', error)
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={5}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
          resizeMode="contain"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center my={30}>
          <Text color="gray.100" fontSize="xl" fontFamily="body" mb={10}>
            Crie sua conta
          </Text>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input placeholder="Senha" type="password" />
          <Input placeholder="Confirme  a Senha" type="password" />
          <Button title="Criar e acessar" onPress={handleCreateAccount} />
        </Center>
        <Center my={5}>
          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={handleLogin}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}

export default SignUp
