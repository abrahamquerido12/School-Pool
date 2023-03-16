//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import BaseLayout from '../components/BaseLayout';
import DriverHome from '../components/home/DriverHome';
import PassengerHome from '../components/home/PassengerHome';
import { StackNavigationProp } from '../StackNavigator';
import { UserType } from '../types/user';
// import { useAuth } from '../hooks/useAuth';

// create a component
const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp>();

  // const { user } = useAuth();
  const firstTime = true;

  const userType: UserType = 'passenger';

  const renderScreen = () => {
    if (userType === 'passenger') {
      return <PassengerHome />;
    }
    return <DriverHome />;
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
