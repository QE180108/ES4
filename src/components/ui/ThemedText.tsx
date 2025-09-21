// app/components/ui/ThemedText.tsx
import React, { useContext } from 'react';
import { Text, TextProps } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemedText(props: TextProps) {
  const { theme } = useContext(ThemeContext);
  return <Text {...props} style={[{ color: theme === 'light' ? '#000' : '#fff' }, props.style]} />;
}
