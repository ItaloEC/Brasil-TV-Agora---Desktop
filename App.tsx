import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['white', '#3423ca']} style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
