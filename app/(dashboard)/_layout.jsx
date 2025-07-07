import { Tabs } from "expo-router"
import { Image, useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"


const DashboardLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Tabs
      screenOptions={{ 
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.iconColourFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
      > 
        <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => (
          <Image
            source={require('../../assets/favicon.png')}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ) }} />
        <Tabs.Screen name="create" options={{ title: 'Create', tabBarIcon: () => (
          <Image
            source={require('../../assets/favicon.png')}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ) }} />
        <Tabs.Screen name="books" options={{ title: 'Books', tabBarIcon: () => (
          <Image
            source={require('../../assets/favicon.png')}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ) }} />
      </Tabs>

  )
}

export default DashboardLayout