//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import BaseLayout from '../components/BaseLayout';
import One from '../components/signup/steps/One';
import Two from '../components/signup/steps/Two';
import { useAuth } from '../hooks/useAuth';

const logo = require('../assets/logo.png');

// create a component
const Signup = () => {
  const navigation = useNavigation();

  // bring useauth from context
  const { user, setUser } = useAuth();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [firstLastName, setFirstLastName] = React.useState('');
  const [secondLastName, setSecondLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [steps, setSteps] = React.useState(1);

  const handleCreateAccount = () => {
    setUser('TestUser');
  };

  console.log(user);

  useEffect(() => {
    if (user) {
      navigation.navigate('Home');
    }
  }, [user]);

  const renderSteps = () => {
    switch (steps) {
      case 1:
        return (
          <One
            setEmail={setEmail}
            setFirstLastName={setFirstLastName}
            setName={setName}
            setSecondLastName={setSecondLastName}
            setSteps={setSteps}
            email={email}
            firstLastName={firstLastName}
            name={name}
            secondLastName={secondLastName}
            styles={styles}
          />
        );
      case 2:
        return (
          <Two
            confirmPassword={confirmPassword}
            password={password}
            setConfirmPassword={setConfirmPassword}
            setPassword={setPassword}
            styles={styles}
            handleCreateAccount={handleCreateAccount}
          />
        );

      default:
        return null;
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <BaseLayout>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      {renderSteps()}
      <View
        style={{
          paddingHorizontal: 15,
        }}
      ></View>

      <View style={styles.noAccountView}>
        <Text
          style={{
            color: '#A7A7A7',
            fontSize: 16,
            marginBottom: 50,
            marginTop: 10,
          }}
        >
          ¿Ya tienes cuenta?
          <Text
            style={{
              color: '#288CE9',
            }}
            onPress={() => navigation.navigate('Login')}
          >
            {' '}
            Inicia Sesión
          </Text>
        </Text>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingHorizontal: 20,
  },
  noAccountView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Signup;
