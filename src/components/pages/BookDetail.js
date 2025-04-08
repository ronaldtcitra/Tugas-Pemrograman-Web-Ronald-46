import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function BookDetail({ route }) {
  const { book } = route.params;
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>{book.title}</Text>
      <Text style={[styles.author, { color: isDarkMode ? '#ccc' : '#333' }]}>by {book.author}</Text>
      <Text style={[styles.content, { color: isDarkMode ? '#ddd' : '#444' }]}>{book.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
  },
});
