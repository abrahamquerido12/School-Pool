import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from './HomeHeader';
import Rides from '../passenger/Rides';

const PassengerHome = () => {
  const navigation = useNavigation();

  // remove the header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.subtitle}>
        <View style={styles.line} />
        <Text style={styles.subtitleText}>Rides</Text>
        <View style={styles.line} />
      </View>
      <Rides />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  subtitleText: {
    color: '#A6A6A6',
    fontSize: 16,
  },
});

export default PassengerHome;
