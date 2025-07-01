import { Text, StyleSheet, } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';

export default function HomeScreen() {
 
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img}/>
      <Text style={styles.title}>Hello, Viktor 1 times</Text>
      <Text style={{marginTop: 18, marginBottom: 20}}>
        Reading List one
      </Text>

      <Link style={styles.marginVertical12} href="/about">To About</Link>
      <Link href="/more">To More</Link>
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

