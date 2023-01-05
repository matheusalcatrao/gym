import React from 'react'
import { VStack, Image, Text, Center, ScrollView } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from '@components/Input'
import Button from '@components/Button'

const SignIn: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={5}>
        <Image
          source={BackgroundImg}
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
        <Center my={24}>
          <Text color="gray.100" fontSize="xl" fontFamily="body" mb={10}>
            Acesse sua conta
          </Text>
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input placeholder="Senha" type="password" />
          <Button title="Acessar" />
        </Center>
        <Center>
          <Text color="gray.100" fontSize="sm" fontFamily="body" mb={5}>
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  )
}

export default SignIn
