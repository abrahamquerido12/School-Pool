import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BaseLayout from '../components/BaseLayout';
import { UserType as UserT } from '../types/user';
import UserType from '../components/completeProfile/UserType';
import { StackNavigationProp } from '../StackNavigator';

const CompleteProfile = () => {
  const navigation = useNavigation<StackNavigationProp>();
  const [userType, setUserType] = useState<UserT>('driver');

  const handleUserTypeSelect = (selectedType: UserT) => {
    setUserType(selectedType);

    // Navigate to the next screen
    navigation.navigate('Home');
  };

  // Render the appropriate screen depending on user type
  const renderScreen = () => {
    if (userType === 'passenger') {
      return (
        <View>
          <Text>You selected passenger</Text>
          {/* Render the screen for passenger profile completion */}
        </View>
      );
    }
    return <UserType onUserTypeSelect={handleUserTypeSelect} />;
  };

  return (
    <BaseLayout>
      {/* Render the appropriate screen depending on user type */}
      {renderScreen()}
    </BaseLayout>
  );
};

export default CompleteProfile;
