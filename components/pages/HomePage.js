// components/pages/HomePage.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import BookList from '../organisms/BookList';
import ButtonAtom from '../atoms/ButtonAtom';
import TextAtom from '../atoms/TextAtom';
import SearchInputAtom from '../atoms/SearchInputAtom';

const HomePage = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [books, setBooks] = useState([
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'Deep Work', author: 'Cal Newport' },
    { title: 'The Power of Now', author: 'Eckhart Tolle' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const bgColor = darkMode ? '#1e1e1e' : '#fff';
  const textColor = darkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TextAtom size={24} style={{ color: textColor, marginBottom: 10 }}>
        📚 Book List
      </TextAtom>

      <SearchInputAtom
        placeholder="Search by title or author..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <BookList books={filteredBooks} />

      <ButtonAtom title="Add Book" onPress={() =>
        setBooks([...books, { title: 'New Book', author: 'Unknown Author' }])
      } />

      <ButtonAtom title={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`} onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    paddingTop: 40,
  },
});

export default HomePage;
