import { View, Image, useColorScheme } from 'react-native'
import React from 'react'
import DarkModeLogo from '../assets/img/full-logo.png'
import LightModeLogo from '../assets/img/full-logo-light.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkModeLogo : LightModeLogo

  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo