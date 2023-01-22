//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

// create a component
const Button = ({ label, theme, onPress, cxStyles }) => {
  const renderTheme = () => {
    if (theme === "primary") {
      return styles.primaryBtn;
    }
    if (theme === "secondary") {
      return styles.secondaryBtn;
    }
  };

  const renderLabelTheme = () => {
    if (theme === "primary") {
      return styles.label;
    }
    if (theme === "secondary") {
      return styles.labelSecondary;
    }
  };

  return (
    <View style={[cxStyles, styles.container]}>
      <Pressable style={[styles.button, renderTheme()]} onPress={onPress}>
        <Text style={[renderLabelTheme()]}>{label}</Text>
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
    width: "100%",
    height: 60,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    textTransform: "uppercase",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  primaryBtn: {
    backgroundColor: "#064789",
  },
  secondaryBtn: {
    backgroundColor: "#FFF",
    // add shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    border: "1px solid #F5F5F5",
    color: "#064789",
  },
  labelSecondary: {
    color: "#064789",
    fontSize: 18,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default Button;
