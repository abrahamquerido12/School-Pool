import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Button from '../components/Button';
import { login } from '../API/handlers';
import BaseLayout from '../components/BaseLayout';
import Input from '../components/Input';
import { StackNavigationProp } from '../StackNavigator';

const logo = require('../assets/logo.png');

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation<StackNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleClick = async () => {
    try {
      const response = await login(email, password);
      const token = response.data.token;
      console.log({ response, token });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BaseLayout>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.form}>
        <Input
          placeholder={'Correo Institucional'}
          onChange={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder={'Contraseña'}
          onChange={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

        <Text style={styles.forgotPassword}>Olvide mi contraseña</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        <Button label="Iniciar Sesión" theme="primary" onPress={handleClick} />
      </View>

      <View style={styles.noAccountView}>
        <Text
          style={{
            color: '#A7A7A7',
            fontSize: 16,
            marginBottom: 50,
          }}
        >
          ¿Aún no tienes cuenta?
          <Text
            style={{
              color: '#288CE9',
            }}
            onPress={() => navigation.navigate('Signup')}
          >
            {' '}
            Regístrate
          </Text>
        </Text>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  form: {
    width: '100%',
    marginTop: 100,
    paddingHorizontal: 20,
  },
  forgotPassword: {
    color: '#A7A7A7',
    marginBottom: 20,
  },
  noAccountView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Login;
