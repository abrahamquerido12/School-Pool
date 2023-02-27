import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NewTrip from './NewTrip';

const Day = ({ day }) => {
  const [addNewTrip, setAddNewTrip] = useState(false);
  const [trips, setTrips] = useState([
    {
      title: 'Trip 1',
      departureTime: '10:00',
      departureLocation: 'Location 1',
      isActive: true,
    },
    {
      title: 'Trip 2',
      departureTime: '11:00',
      departureLocation: 'Location 2',
      isActive: false,
    },
  ]);
  const [title, setTitle] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleAddTrip = () => {
    const newTrip = { title, departureTime, departureLocation, isActive };
    setTrips([...trips, newTrip]);
    setTitle('');
    setDepartureTime('');
    setDepartureLocation('');
    setIsActive(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{day}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setAddNewTrip(true)}
        >
          <Text style={styles.addTextBtn}>+</Text>
        </TouchableOpacity>
      </View>
      {trips.map((trip, index) => (
        <View key={index} style={styles.trip}>
          <Text style={styles.tripTitle}>{trip.title}</Text>
          <Text>Departure time: {trip.departureTime}</Text>
          <Text>Departure location: {trip.departureLocation}</Text>
          <Text>Active: {trip.isActive ? 'Yes' : 'No'}</Text>
        </View>
      ))}
      {addNewTrip && <NewTrip handleAddTrip={handleAddTrip} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,

    // add some space between days and border
    marginBottom: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#064789',
    // make it a circle
    borderRadius: 5,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTextBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  trip: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  tripTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputContainer: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Day;
