// app/components/ui/ThemedView.tsx
import React, { useContext } from 'react';
import { View, ViewProps } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemedView(props: ViewProps) {
  const { theme } = useContext(ThemeContext);
  return <View {...props} style={[{ backgroundColor: theme === 'light' ? '#fff' : '#0b0b0b' }, props.style]} />;
}
