import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "./hooks/useAuth";
import AuthMenu from "./screens/AuthMenu";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const Stack = createNativeStackNavigator();

const StackNavigatior = () => {
  const { user } = useAuth();

  const renderAtuhStack = () => {
    return user ? (
      <Stack.Screen name="Home" component={HomeScreen} />
    ) : (
      <>
        <Stack.Screen name="AuthMenu" component={AuthMenu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="AuthMenu"
      defaultScreenOptions={{
        headerShown: false,
      }}
    >
      {renderAtuhStack()}
    </Stack.Navigator>
  );
};

export default StackNavigatior;
