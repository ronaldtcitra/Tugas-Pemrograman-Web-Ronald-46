// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './components/pages/HomePage';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <HomePage />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
