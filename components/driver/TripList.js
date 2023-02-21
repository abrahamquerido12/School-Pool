import React from 'react';
import { View, StyleSheet } from 'react-native';
import NoVehicleCard from './NoVehicleCard';
import Trip from './Trip';

const TripList = () => {
  const vehicle = null;
  const trips = [];

  const renderTrips = () => {
    if (!vehicle) return <NoVehicleCard />;

    return (
      <View>
        {trips.map((trip) => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </View>
    );
  };

  return <View style={styles.container}>{renderTrips()}</View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default TripList;