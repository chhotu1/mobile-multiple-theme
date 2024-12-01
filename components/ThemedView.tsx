import React from 'react';
import { View, type ViewProps, StyleProp, ViewStyle } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemeKey = 'background' | 'text' | 'tint' | 'icon' | 'tabIconDefault' | 'tabIconSelected';

export type ThemedViewProps = ViewProps & {
  colorKey?: ThemeKey; // Restrict to specific theme keys
  style?: StyleProp<ViewStyle>;
};

export function ThemedView({ style, colorKey = 'background', ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(colorKey);

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
