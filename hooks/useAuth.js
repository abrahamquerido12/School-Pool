//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const AuthContext = React.createContext({});

// create a component
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
