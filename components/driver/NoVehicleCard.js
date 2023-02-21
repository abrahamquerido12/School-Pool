import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button';

const NoVehicleCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No hay vehículo configurado</Text>

      <Text style={styles.description}>
        No has configurado ningún vehículo. Por favor, configura tu vehículo
        para poder usar la aplicación.
      </Text>
      <Button
        cxStyles={{
          padding: 10,
          width: '100%',
          height: 40,
        }}
        cxLabelStyles={{
          fontSize: 14,
        }}
        label={'Agregar vehículo'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // add shadow
    shadowColor: '#000',
    flexDirection: 'column',
    alignItems: 'flex-start',

    height: 150,
    maxHeight: 150,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
    border: '1px solid #F5F5F5',
    borderRadius: 7,
    padding: 10,
  },

  title: {
    color: '#427AA1',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    justifyContent: 'center',
  },
});

export default NoVehicleCard;
