import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { UserType as UserT } from '../../types/user';

interface UserTypeProps {
  onUserTypeSelect: (userType: UserT) => void;
}

const UserType = ({ onUserTypeSelect }: UserTypeProps) => {
  const navigation = useNavigation();

  const handleDriverPress = () => {
    onUserTypeSelect('driver');
  };

  const handlePassengerPress = () => {
    onUserTypeSelect('passenger');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yo soy</Text>

      <View style={styles.buttonsContainer}>
        <Pressable onPress={handleDriverPress} style={styles.button}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/car.png')}
          />
          <Text style={styles.buttonLabel}>Conductor</Text>
        </Pressable>
        <Pressable onPress={handlePassengerPress} style={styles.button}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/user.png')}
          />
          <Text style={styles.buttonLabel}>Pasajero</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 7,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
    border: '1px solid #F5F5F5',

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    marginRight: 10,
    width: 150,
    height: 150,
  },
  buttonIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  buttonLabel: {
    color: '#427AA1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default UserType;
