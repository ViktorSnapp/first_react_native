import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ThemedText = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = title ? theme.title : theme.text

  return (
    <Text style={[{ color: textColor }, style]}
      {...props}
    />
  )
}

export default ThemedText

const styles = StyleSheet.create({})