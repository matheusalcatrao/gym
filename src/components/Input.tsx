import React from 'react'
import { Input as NativeBaseInput, IInputProps, Text } from 'native-base'

interface IInput extends IInputProps {
  showErrorType?: string
}

const Input: React.FC<IInput> = ({ showErrorType, ...rest }: IInput) => {
  console.log('🚀 ~ file: Input.tsx:9 ~ showErrorType', showErrorType)
  return (
    <>
      <NativeBaseInput
        {...rest}
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        mb={4}
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: !!showErrorType ? 'red.600' : 'green.500',
        }}
      />
      {showErrorType && (
        <Text color="red.600" fontFamily="body" fontSize="md">
          {showErrorType}
        </Text>
      )}
    </>
  )
}

export default Input
