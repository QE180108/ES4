// app/components/TaskInput.tsx
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ value, onChangeText, onAdd, placeholder = 'Add a task...' }: {
  value: string;
  onChangeText: (s: string) => void;
  onAdd: () => void;
  placeholder?: string;
}) {
  return (
    <View style={styles.row}>
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} />
      <Button title="Add" onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginRight: 8 },
});
