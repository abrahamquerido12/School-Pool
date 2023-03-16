import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

interface NewTripProps {
  handleAddTrip: () => void;
}

const NewTrip = ({ handleAddTrip }: NewTripProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Title" />
      <TextInput style={styles.input} placeholder="Departure Time" />
      <TextInput style={styles.input} placeholder="Departure Location" />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTrip}>
        <Text style={styles.addButtonText}>Add Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#064789',
  },
  addButtonText: {
    color: '#fff',
  },
});

export default NewTrip;
