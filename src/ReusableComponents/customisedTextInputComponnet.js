import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, onChangeText, value, style }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CustomTextInput;
