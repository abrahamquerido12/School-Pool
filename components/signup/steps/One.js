import React from 'react';
import { View } from 'react-native';
import Button from '../../Button';
import Input from '../../Input';

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
}) => {
  return (
    <View style={styles.form}>
      <Input
        label={'Nombre'}
        placeholder={'Nombre'}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Input
        label={'Email'}
        placeholder={'Email'}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        label={'Apellido Paterno'}
        placeholder={'Apellido Paterno'}
        onChangeText={(text) => setFirstLastName(text)}
        value={firstLastName}
      />
      <Input
        label={'Apellido Materno'}
        placeholder={'Apellido Materno'}
        onChangeText={(text) => setSecondLastName(text)}
        value={secondLastName}
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
