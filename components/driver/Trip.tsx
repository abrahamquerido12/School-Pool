import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface TripProps {
  trip: {
    id: string;
    origin: string;
    destination: string;
  };
}
const Trip = ({ trip }: TripProps) => {
  return (
    <View style={styles.container}>
      <Text> Trip </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Trip;
