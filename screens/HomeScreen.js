//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import BaseLayout from '../components/BaseLayout';
import DriverHome from '../components/home/DriverHome';
// import { useAuth } from '../hooks/useAuth';

// create a component
const HomeScreen = () => {
  const navigation = useNavigation();

  // const { user } = useAuth();
  const firstTime = true;

  const userType = 'driver';

  const renderScreen = () => {
    if (userType === 'driver') {
      return <DriverHome />;
    }

    if (userType === 'passenger') {
      return <Text>Passenger</Text>;
    }
  };

  useEffect(() => {
    if (firstTime) {
      navigation.navigate('CompleteProfile');
    }
  }, []);

  return <BaseLayout>{renderScreen()}</BaseLayout>;
};

//make this component available to the app
export default HomeScreen;
