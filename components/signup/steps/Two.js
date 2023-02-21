import React from 'react';
import { View } from 'react-native';
import Button from '../../Button';
import Input from '../../Input';

const Two = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  styles,
  handleCreateAccount,
}) => {
  return (
    <View style={styles.form}>
      <Input
        label={'Contraseña'}
        placeholder={'Contraseña'}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Input
        label={'Confirmar Contraseña'}
        placeholder={'Confirmar Contraseña'}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <Button
        label="Crear Cuenta"
        theme="primary"
        onPress={handleCreateAccount}
        cxStyles={{
          marginTop: 50,
        }}
      />
    </View>
  );
};

export default Two;
