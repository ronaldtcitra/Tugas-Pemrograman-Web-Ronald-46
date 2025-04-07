// components/molecules/BookItem.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/TextAtom';

const BookItem = ({ title, author }) => {
  return (
    <View style={styles.container}>
      <TextAtom size={18} style={styles.title}>{title}</TextAtom>
      <TextAtom size={14} color="#555">{author}</TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    marginVertical: 6,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default BookItem;
