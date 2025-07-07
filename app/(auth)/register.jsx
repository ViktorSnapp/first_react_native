import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
  const handleSubmit = () => {
    console.log('------> Register submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer/>
      <ThemedText title={true} style={styles.title}>
        register to Your Account
      </ThemedText>
      <ThemedButton onPress = { handleSubmit }>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "Center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  }
})