// app/components/TaskItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../redux/tasksSlice';

export default function TaskItem({ item, onToggle, onRemove, theme }: {
  item: Task;
  onToggle: () => void;
  onRemove: () => void;
  theme: 'light' | 'dark';
}) {
  return (
    <View style={[styles.row, { backgroundColor: theme === 'light' ? '#f6f6f6' : '#151515' }]}>
      <TouchableOpacity onPress={onToggle}>
        <Text style={[styles.text, item.completed && styles.completed]}>{item.completed ? '✅' : '⬜'} {item.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove}>
        <Text style={{ color: '#ff4d4f' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 8, marginBottom: 8 },
  text: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: '#888' },
});
