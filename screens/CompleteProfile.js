import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BaseLayout from '../components/BaseLayout';
import AddVehicleScreen from '../components/completeProfile/driver/AddVehicle';
import UserType from '../components/completeProfile/UserType';

const CompleteProfile = () => {
  const navigation = useNavigation();
  const [userType, setUserType] = useState('');

  const handleUserTypeSelect = (selectedType) => {
    setUserType(selectedType);

    // Navigate to the next screen
    navigation.navigate('Home');
  };

  // Render the appropriate screen depending on user type
  const renderScreen = () => {
    if (userType === '') {
      return <UserType onUserTypeSelect={handleUserTypeSelect} />;
    }

    // if (userType === 'driver') {
    //   return <AddVehicleScreen />;
    // }

    if (userType === 'passenger') {
      return (
        <View>
          <Text>You selected passenger</Text>
          {/* Render the screen for passenger profile completion */}
        </View>
      );
    }
  };

  return (
    <BaseLayout>
      {/* Render the appropriate screen depending on user type */}
      {renderScreen()}
    </BaseLayout>
  );
};

export default CompleteProfile;
