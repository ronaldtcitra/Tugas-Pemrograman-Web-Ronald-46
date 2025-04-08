import React from 'react';
import { Text } from 'react-native';

const TextAtom = ({ children, size = 16, color = '#000', style }) => {
  return <Text style={[{ fontSize: size, color }, style]}>{children}</Text>;
};

export default TextAtom;
