import React from 'react';
import { View } from 'react-native';
import Button from '../../Button';
import Input from '../../Input';

interface TwoProps {
  password: string;
  confirmPassword: string;
  setPassword: (text: string) => void;
  setConfirmPassword: (text: string) => void;
  styles: {
    form: any;
  };
  handleCreateAccount: () => void;
}

const Two = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  styles,
  handleCreateAccount,
}: TwoProps) => {
  return (
    <View style={styles.form}>
      <Input
        placeholder={'Contraseña'}
        onChange={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Input
        placeholder={'Confirmar Contraseña'}
        onChange={(text) => setConfirmPassword(text)}
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
