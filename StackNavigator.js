import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddVehicleScreen from './screens/driver/AddVehicle';
import { useAuth } from './hooks/useAuth';
import CompleteProfile from './screens/CompleteProfile';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import AddSchedule from './screens/driver/AddSchedule';
import SettingsScreen from './screens/driver/Settings';

const Stack = createNativeStackNavigator();

const StackNavigatior = () => {
  const { user } = useAuth();

  const renderAtuhStack = () => {
    return user ? (
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
        <Stack.Screen name="AddSchedule" component={AddSchedule} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
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
