import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input = ({
  placeholder,
  value,
  onChange,
  secureTextEntry = false,
}: InputProps) => {
  return (
    <TextInput
      placeholderTextColor="#A7A7A7"
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      secureTextEntry={secureTextEntry}
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
    color: 'black',
    fontSize: 18,
    fontWeight: 'normal',
  },
});

export default Input;
