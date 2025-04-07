// components/organisms/BookList.js
import React from 'react';
import { View } from 'react-native';
import BookItem from '../molecules/BookItem';

const BookList = ({ books }) => {
  return (
    <View>
      {books.map((book, index) => (
        <BookItem key={index} title={book.title} author={book.author} />
      ))}
    </View>
  );
};

export default BookList;
