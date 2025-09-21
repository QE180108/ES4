// app/components/ThemeToggle.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.btn}>
      <Text style={styles.text}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { padding: 8, borderRadius: 6, backgroundColor: '#e5e5e5' },
  text: { fontWeight: '600' },
});
