import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardContainer from '../CardContainer';

const Trip = ({ trip, handleDeleteTrip, handleDisableTrip }) => {
  return (
    <CardContainer>
      <View style={styles.trip}>
        <Text style={styles.tripTitle}>{trip.title}</Text>
        <Text>Departure time: {trip.departureTime}</Text>
        <Text>Departure location: {trip.departureLocation}</Text>
        <Text>Active: {trip.isActive ? 'Yes' : 'No'}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleDeleteTrip}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDisableTrip}>
        <Text style={styles.buttonText}>
          {trip.isActive ? 'Disable' : 'Enable'}
        </Text>
      </TouchableOpacity>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trip: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
  },
  tripTitle: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Trip;
