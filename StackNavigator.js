import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAuth } from './hooks/useAuth';
import CompleteProfile from './screens/CompleteProfile';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

const StackNavigatior = () => {
  const { user } = useAuth();

  const renderAtuhStack = () => {
    return user ? (
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
      </>
    ) : (
      <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="Login"
      defaultScreenOptions={{
        headerShown: false,
      }}
    >
      {renderAtuhStack()}
    </Stack.Navigator>
  );
};

export default StackNavigatior;
