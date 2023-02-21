import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Icon } from '@rneui/themed';
import TripList from '../driver/TripList';
import { useNavigation } from '@react-navigation/native';

const DriverHome = () => {
  const navigation = useNavigation();
  const userName = 'Abraham';

  // remove the header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="settings" size={30} />
      </View>

      <Text style={styles.title}>Bienvenido, </Text>
      <Text style={styles.title}>{userName}</Text>

      <View style={styles.subtitle}>
        <View style={styles.line} />
        <Text style={styles.subtitleText}>Viajes</Text>
        <View style={styles.line} />
      </View>

      <TripList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  header: {
    // should be full width and send icon to the right
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#064789',
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

export default DriverHome;
