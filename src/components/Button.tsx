import React from 'react'
import { Button as ButtonNativeBase, Text } from 'native-base'

interface IButton {
  title: string
}

const Button: React.FC<IButton> = ({ title, ...rest }: IButton) => {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg="green.700"
      rounded="sm"
      {...rest}
      _pressed={{
        bg: 'green.500',
      }}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  )
}

export default Button
