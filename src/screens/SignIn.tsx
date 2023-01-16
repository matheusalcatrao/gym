import React from 'react'
import { VStack, Image, Text, Center, ScrollView, useToast } from 'native-base'
import { Formik } from 'formik'
import { signInWithEmailAndPassword } from 'firebase/auth'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from '@components/Input'
import Button from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import userSchema from './User.schema'
import { auth } from '../../firebaseConfig'
import ErrorType from 'src/types/ErrorType'

type FormValues = {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const navigation = useNavigation<AuthNavigationRoutesProps>()
  const toast = useToast()

  const handleNewAccount = () => {
    navigation.navigate('signUp')
  }

  const loginUser = async (values: FormValues) => {
    try {
      const { email, password } = values
      await signInWithEmailAndPassword(auth, email, password)
      toast.show({ description: 'Login with success' })
    } catch (error: ErrorType | any) {
      toast.show({ description: error.message })
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
        <Center my={24}>
          <Text color="gray.100" fontSize="xl" fontFamily="body" mb={8}>
            Acesse sua conta
          </Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={loginUser}
            validationSchema={userSchema}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <>
                <Input
                  placeholder="E-mail"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  showErrorType={errors['email']}
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  showErrorType={errors['password']}
                />
                <Button title="Acessar" onPress={() => handleSubmit()} />
              </>
            )}
          </Formik>
        </Center>
        <Center>
          <Text color="gray.100" fontSize="sm" fontFamily="body" mb={5}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}

export default SignIn
