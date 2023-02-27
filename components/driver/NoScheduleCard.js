import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Button from '../Button';
import CardContainer from '../CardContainer';

const NoScheduleCard = () => {
  const navigation = useNavigation();

  const handleAddVehiclePress = () => {
    navigation.navigate('AddSchedule');
  };

  return (
    <CardContainer>
      <Text style={styles.title}>No hay horario configurado</Text>

      <Text style={styles.description}>
        No has configurado ningún horario. Por favor, configura tu horario para
        poder recibir solicitudes de viaje.
      </Text>
      <Button
        cxStyles={{
          padding: 10,
          width: '100%',
          height: 40,
        }}
        onPress={handleAddVehiclePress}
        cxLabelStyles={{
          fontSize: 14,
        }}
        label={'Agregar horario'}
      />
    </CardContainer>
  );
};

const styles = StyleSheet.create({
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

export default NoScheduleCard;
