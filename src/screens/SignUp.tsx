import React, { useState } from 'react'
import { VStack, Image, Text, Center, ScrollView, useToast } from 'native-base'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Formik } from 'formik'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from '@components/Input'
import Button from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import { auth } from '../../firebaseConfig'
import userSchema from './SignUp.schema'
import ErrorType from 'src/types/ErrorType'

type formValues = {
  email: string
  password: string
  confirmPassword: string
}

const SignUp = () => {
  const navigation = useNavigation<AuthNavigationRoutesProps>()
  const toast = useToast()

  const handleLogin = () => {
    navigation.navigate('signIn')
  }

  const handleCreateAccount = async (value: formValues) => {
    try {
      const { email, confirmPassword, password } = value

      if (password !== confirmPassword) {
        toast.show({ description: 'Digite a mesma senha!' })
        return
      }

      await createUserWithEmailAndPassword(auth, email, password)
      toast.show({
        description: 'Register with success',
      })
    } catch (error: ErrorType | any) {
      // console.error('Error on handleCreateAccount: ', error.message)
      toast.show({
        description: error.message,
      })
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
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(value) => handleCreateAccount(value)}
            validationSchema={userSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <Input
                  placeholder="Nome"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  showErrorType={errors['name']}
                />
                <Input
                  placeholder="E-mail"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  showErrorType={errors['email']}
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  showErrorType={errors['password']}
                />
                <Input
                  placeholder="Confirme  a Senha"
                  type="password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  showErrorType={errors['confirmPassword']}
                />
                <Button
                  title="Criar e acessar"
                  onPress={() => handleSubmit()}
                />
              </>
            )}
          </Formik>
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
