import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  console.log(`----> ${colorScheme}`);

  return (
    <>
      <StatusBar value="auto"></StatusBar>
      <Stack screenOptions={{ 
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />

        <Stack.Screen name="(auth)/login" options={{ title: 'Login' }} />
        <Stack.Screen name="(auth)/register" options={{ title: 'Register' }} />
        <Stack.Screen name="(dashboard)/profile" options={{ title: 'Profile' }} />

        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})