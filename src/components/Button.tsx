import React from 'react'
import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base'

type IButton = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

const Button: React.FC<IButton> = ({
  title,
  variant = 'solid',
  ...rest
}: IButton) => {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.700"
      rounded="sm"
      {...rest}
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}

export default Button
