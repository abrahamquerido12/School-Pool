import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../Button';
import Ride from './Ride';

const rideImage = require('../../assets/ride.png');
const Rides = () => {
  const [rides] = React.useState([
    {
      id: 1,
      driver: {
        id: 1,
        name: 'John Doe',
        rating: 4.5,
        car: {
          model: 'Toyota Corolla',
          plate: 'ABC123',
        },
      },
      origin: {
        latitude: 0,
        longitude: 0,
        address: 'Calle 123, Colonia 123, Ciudad 123',
      },
      destination: {
        latitude: 0,
        longitude: 0,
        address: 'Calle 123, Colonia 123, Ciudad 123',
      },
      status: 'active',
    },
  ]);

  const renderRides = () => {
    if (!rides.length)
      return (
        <>
          {/* Add image from assets/ride.png */}

          <Image source={rideImage} style={styles.image} />

          <Text style={styles.text}>No se encontraron viajes activos.</Text>

          <View style={styles.btnContainer}>
            <Button
              label="Buscar viajes"
              onPress={() => console.log('Buscar viajes')}
            />
          </View>
        </>
      );

    return rides.map((ride) => {
      return <Ride key={ride.id} ride={ride} />;
    });
  };

  return <View style={styles.container}>{renderRides()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // styles for a header text

    fontSize: 20,
    color: 'grey',
    marginVertical: 15,
  },
  image: {
    // do not cut the image

    resizeMode: 'contain',
    width: '100%',
    height: 250,

    marginBottom: 15,
  },
  btnContainer: {
    // styles for a container of a button

    width: '100%',
  },
});

export default Rides;
