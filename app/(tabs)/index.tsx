import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeTab() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Personal Task Manager 🎯</Text>
      <Button title="Go to Login" onPress={() => router.push("/Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, marginBottom: 20 },
});
