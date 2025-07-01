import { View, Text, StyleSheet, } from 'react-native';
import { Link } from 'expo-router';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MoreScreen</Text>

      <Link href="/">To Home</Link>
    </View>
  );
}

export default MoreScreen

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
    width: 50,
    height: 50,
    margin: 12,
    borderRadius: 8,
  },
});