import { Text, StyleSheet, } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

export default function HomeScreen() {
 
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img}/>
      <ThemedText style={styles.title} title="true">Hello, Viktor 1 times</ThemedText>
      <Spacer/>
      <Link href="/login">Login Page</Link>
      <Spacer/>
      <Link href="/register">Register Page</Link>
      <Spacer/>
      <Link href="/profile">Profile Page</Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  img: {
    width: 150,
    height: 150,
    margin: 12,
    borderRadius: 8,
  },
  marginVertical12: {
    marginVertical: 12,
  }
});

