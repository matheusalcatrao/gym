import React from 'react'
import { VStack, Image, Text, Center } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from '@components/Input'
import Button from '@components/Button'

const SignIn: React.FC = () => {
  return (
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
        <Input
          placeholder="Senha"
          type="password"
          // showErrorType="senha incorreta"
        />
        <Button title="Acessar" />
      </Center>
    </VStack>
  )
}

export default SignIn
