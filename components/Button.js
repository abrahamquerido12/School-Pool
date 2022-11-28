//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

// create a component
const Button = ({ label, theme, onPress }) => {
  const renderTheme = () => {
    if (theme === "primary") {
      return styles.primaryBtn;
    }
    if (theme === "secondary") {
      return styles.secondaryBtn;
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, renderTheme()]} onPress={onPress}>
        <Text style={[styles.label, theme]}>{label}</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  primaryBtn: {
    backgroundColor: "#3EA69B",
  },
  secondaryBtn: {
    backgroundColor: "#A0A0A0",
  },
});

//make this component available to the app
export default Button;
