//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { login } from "../API/handlers";

const horizontalLogo = require("../assets/horizontal_logo.png");
const background = require("../assets/background.png");

// create a component
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleClick = async () => {
    try {
      const response = await login(email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          {/* View for header (back btn and logo) */}
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: "transparent",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 20,
              width: "100%",
            }}
          >
            <View style={styles.header}>
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  style={styles.icon}
                  name="chevron-back"
                  size={28}
                  color="white"
                />
              </Pressable>
              <Image source={horizontalLogo} style={styles.logo} />
            </View>

            <Text style={styles.title}>Inicia Sesión</Text>

            <View style={styles.form}>
              <TextInput
                placeholderTextColor="#A7A7A7"
                style={styles.input}
                placeholder="Correo Institucional"
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                placeholderTextColor="#A7A7A7"
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <Text style={styles.forgotPassword}>Olvide mi contraseña</Text>
            </View>
            <View style={styles.btnContainer}>
              <Text
                style={{
                  color: "#A7A7A7",
                  fontSize: 16,
                  marginBottom: 50,
                }}
              >
                ¿Aún no tienes cuenta?
                <Text
                  style={{
                    color: "#288CE9",
                  }}
                  onPress={() => navigation.navigate("Signup")}
                >
                  {" "}
                  Regístrate
                </Text>
              </Text>
              <Button
                label="Iniciar Sesión"
                theme="primary"
                onPress={handleClick}
              />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1B1B",
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 250,
    resizeMode: "contain",
    marginRight: "auto",
    marginLeft: "auto",
  },
  icon: {
    marginRight: "auto",
  },
  title: {
    marginTop: 50,
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },

  form: {
    width: "100%",
    marginTop: 50,
  },
  input: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#A7A7A7",
    marginBottom: 20,
  },
  btnContainer: {
    width: "100%",
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Login;
