import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import React from 'react';
import AddVehicleScreen from './screens/driver/AddVehicle';
import { useAuth } from './hooks/useAuth';
import CompleteProfile from './screens/CompleteProfile';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import AddSchedule from './screens/driver/AddSchedule';
import SettingsScreen from './screens/driver/Settings';
import { useNavigation } from '@react-navigation/native';

export type StackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  AddVehicle: undefined;
  AddSchedule: undefined;
  CompleteProfile: undefined;
  Setting: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;

const StackNavigatior = () => {
  const { user } = useAuth();

  const renderAtuhStack = () => {
    return user ? (
      <>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
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
