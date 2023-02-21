import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Input';
import Button from '../../Button';

const AddVehicleScreen = () => {
  const navigation = useNavigation();
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar los datos del vehículo en tu backend
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añadir vehículo</Text>
      <Input
        style={styles.input}
        label="Marca"
        value={brand}
        onChangeText={setBrand}
      />
      <Input
        style={styles.input}
        label="Modelo"
        value={model}
        onChangeText={setModel}
      />
      <Input
        style={styles.input}
        label="Color"
        value={color}
        onChangeText={setColor}
      />
      <Input
        style={styles.input}
        label="Placas"
        value={licensePlate}
        onChangeText={setLicensePlate}
      />
      <Button label={'Guardar'} theme={'primary'} onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default AddVehicleScreen;
