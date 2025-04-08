import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Button, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext';

export default function HomePage() {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();

  const [books, setBooks] = useState([
    { id: '1', title: 'Belajar Ekonomi', author: 'Budi Santoso', content: 'Isi buku ekonomi dasar.' },
    { id: '2', title: 'Dasar React Native', author: 'Siti Aminah', content: 'Panduan membuat aplikasi mobile.' },
    { id: '3', title: 'Strategi Game Edukasi', author: 'Agus Salim', content: 'Membuat game sambil belajar.' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddBook = () => {
    if (newTitle.trim() === '' || newAuthor.trim() === '') return;

    const newBook = {
      id: Date.now().toString(),
      title: newTitle,
      author: newAuthor,
      content: 'Isi buku belum tersedia.',
    };
    setBooks(prevBooks => [newBook, ...prevBooks]);
    setNewTitle('');
    setNewAuthor('');
  };

  const handleDelete = (id) => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
  };

  const handleSelectBook = (book) => {
    navigation.navigate('BookDetail', { book });
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={[styles.bookItem, { backgroundColor: isDarkMode ? '#222' : '#eee' }]}>
      <Pressable onPress={() => handleSelectBook(item)} style={{ flex: 1 }}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>{item.title}</Text>
        <Text style={[styles.author, { color: isDarkMode ? '#aaa' : '#555' }]}>{item.author}</Text>
      </Pressable>
      <Pressable onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>X</Text>
      </Pressable>
    </View>
  );

  return (
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}
>
  <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
    <Feather name={isDarkMode ? 'sun' : 'moon'} size={24} color={isDarkMode ? '#fff' : '#000'} />
  </TouchableOpacity>

  <View style={styles.header}>
    <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#000' }]}>📚Book List</Text>
  </View>


      <TextInput
        style={[styles.input, { backgroundColor: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
        placeholder="Cari buku..."
        placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={[styles.inputContainer, { backgroundColor: isDarkMode ? '#111' : '#f9f9f9' }]}>
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
          placeholder="Judul Buku"
          placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
          placeholder="Nama Penulis"
          placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
          value={newAuthor}
          onChangeText={setNewAuthor}
        />
        <Button title="Tambah Buku" onPress={handleAddBook} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 8,
  },
  themeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  
  
});
