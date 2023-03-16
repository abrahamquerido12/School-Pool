import React from 'react';
import { View } from 'react-native';
import Button from '../../Button';
import Input from '../../Input';

interface OneProps {
  name: string;
  email: string;
  firstLastName: string;
  secondLastName: string;

  setName: (text: string) => void;
  setEmail: (text: string) => void;
  setFirstLastName: (text: string) => void;
  setSecondLastName: (text: string) => void;
  setSteps: (step: number) => void;

  styles: {
    form: any;
  };
}

const One = ({
  name,
  email,
  firstLastName,
  secondLastName,

  setName,
  setEmail,
  setFirstLastName,
  setSecondLastName,
  setSteps,

  styles,
}: OneProps) => {
  return (
    <View style={styles.form}>
      <Input
        placeholder={'Nombre'}
        onChange={(text) => setName(text)}
        value={name}
      />

      <Input
        placeholder={'Apellido Paterno'}
        onChange={(text) => setFirstLastName(text)}
        value={firstLastName}
      />
      <Input
        placeholder={'Apellido Materno'}
        onChange={(text) => setSecondLastName(text)}
        value={secondLastName}
      />
      <Input
        placeholder={'Email'}
        onChange={(text) => setEmail(text)}
        value={email}
      />
      <Button
        label="Siguiente"
        theme="primary"
        cxStyles={{
          marginTop: 10,
        }}
        onPress={() => setSteps(2)}
      />
    </View>
  );
};

export default One;
