import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Day from '../../components/driver/Schedule/Day';

const AddSchedule = () => {
  const navigation = useNavigation();

  const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  const handleSave = () => {
    navigation.goBack();
  };

  const renderDays = () => {
    return days.map((day) => {
      return <Day key={day} day={day} />;
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Añadir horario',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {renderDays()}
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

export default AddSchedule;
