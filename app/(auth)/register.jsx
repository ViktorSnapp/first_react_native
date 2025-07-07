import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer/>
      <ThemedText title={true} style={styles.title}>
        register to Your Account
      </ThemedText>

      <Spacer height={100}/>
      <Link href="/register">
        <ThemedText style={{ textAlign: 'center' }}>
          register insted
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "Center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  }
})