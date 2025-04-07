// components/atoms/ButtonAtom.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonAtom = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  txt: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ButtonAtom;
