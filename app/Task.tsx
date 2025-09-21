import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../src/redux/store";
import { addTask, toggleTask, removeTask } from "../src/redux/tasksSlice";
import { ThemeContext } from "../src/context/ThemeContext";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TaskScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch(addTask(title));
    setTitle("");
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("session");
    router.replace("/Login");
  };

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Manager</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button title={theme === "light" ? "Dark" : "Light"} onPress={toggleTheme} />
          <Button title="Logout" onPress={handleLogout} color="red" />
        </View>
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="Add new task..."
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => dispatch(toggleTask(item.id))}
            onLongPress={() =>
              Alert.alert("Delete", "Confirm delete?", [
                { text: "Cancel", style: "cancel" },
                { text: "OK", style: "destructive", onPress: () => dispatch(removeTask(item.id)) },
              ])
            }
            style={styles.taskItem}
          >
            <Text style={[styles.taskText, item.completed && styles.completed]}>
              {item.completed ? "✅" : "⬜"} {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const createStyles = (theme: "light" | "dark") =>
  StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: theme === "light" ? "#fff" : "#000" },
    header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
    title: { fontSize: 22, fontWeight: "bold", color: theme === "light" ? "#000" : "#fff" },
    row: { flexDirection: "row", marginBottom: 12 },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginRight: 8,
      color: theme === "light" ? "#000" : "#fff",
    },
    taskItem: { padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
    taskText: { fontSize: 16, color: theme === "light" ? "#000" : "#fff" },
    completed: { textDecorationLine: "line-through", color: "gray" },
  });
