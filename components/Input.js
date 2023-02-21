import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ label, value, onChange }) => {
  return (
    <TextInput
      placeholderTextColor="#A7A7A7"
      style={styles.input}
      placeholder={label}
      onChangeText={onChange}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#D9D9D9',
    marginVertical: 5,
    paddingHorizontal: 20,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
  },
});

export default Input;
