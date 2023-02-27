// crate a settings screen

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar sesión
    navigation.navigate('Login');
  };

  // change screen header title
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Configuración',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <Button
        label={'Cerrar sesión'}
        theme={'primary'}
        onPress={handleLogout}
      />
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

export default SettingsScreen;
