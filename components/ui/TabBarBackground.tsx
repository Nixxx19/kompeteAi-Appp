import React from 'react';
import { View, StyleSheet } from 'react-native';

// Create a simple transparent background component for Android/Web
export default function TabBarBackground() {
  return (
    <View style={styles.background} />
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
    // You could also use transparent if you prefer: backgroundColor: 'transparent'
  },
});

export function useBottomTabOverflow() {
  return 0;
}
