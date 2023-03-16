import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

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

  // change screen header title
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Añadir vehículo',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añadir vehículo</Text>
      <Input placeholder="Marca" value={brand} onChange={setBrand} />
      <Input placeholder="Modelo" value={model} onChange={setModel} />
      <Input placeholder="Color" value={color} onChange={setColor} />
      <Input
        placeholder="Placas"
        value={licensePlate}
        onChange={setLicensePlate}
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
