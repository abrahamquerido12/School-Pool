import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ride = ({ ride }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.riderName}>Abraham Querido</Text>
        <Text>Recurrente</Text>
      </View>
      <Text style={styles.date}>Hoy</Text>
      <Text style={styles.place}>Plaza del Sol 10:00 AM</Text>

      <View style={styles.moreDetailsRow}>
        <Text style={styles.moreDetails}>Ver</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 150,
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    display: 'flex',
    flexDirection: 'column',
  },
  riderName: {
    fontSize: 20,
    color: '#064789',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 18,
    color: 'red',
    opacity: 0.8,
    marginTop: 5,
  },
  place: {
    fontSize: 18,
    marginVertical: 2,
    opacity: 0.7,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreDetailsRow: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  moreDetails: {
    fontSize: 18,
    color: '#064789',
  },
});

export default Ride;
