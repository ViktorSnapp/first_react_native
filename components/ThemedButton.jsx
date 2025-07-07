import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function ThemedButton({ style, ...props }) {

  return (
    <Pressable 
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        {...props}
      />        
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 8,
    marginVertical: 12,
  },
  pressed: {
    opacity: 0.6,
  }
})

export default ThemedButton