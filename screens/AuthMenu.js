//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useLayoutEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import Button from "../components/Button";

const logo = require("../assets/logo.png");
const background = require("../assets/background.png");

const AuthMenu = () => {
  const navigation = useNavigation();

  const handelPress = (button) => {
    navigation.navigate(button);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.leyend}>
          ¡La forma más segura y rápida de viajar a tu escuela!
        </Text>

        <View style={styles.buttons}>
          <Pressable
            style={styles.registerBtn}
            onPress={() => handelPress("Signup")}
          >
            <Text style={styles.btnLabel}>Regístrate</Text>
          </Pressable>
          <Pressable
            style={styles.loginBtn}
            onPress={() => handelPress("Login")}
          >
            <Text style={styles.btnLabel}>Inicia Sesión</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1B1B",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 170,
  },
  leyend: {
    color: "#A0A0A0",
    fontSize: 18,
    width: 300,
    textAlign: "center",
  },
  buttons: {
    width: "100%",
    marginTop: "auto",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#3EA69B",
  },
  loginBtn: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

//make this component available to the app
export default AuthMenu;
