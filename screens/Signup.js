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
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import BaseLayout from "../components/BaseLayout";
import Input from "../components/Input";

const logo = require("../assets/logo.png");

// create a component
const Signup = () => {
  const navigation = useNavigation();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstLastName, setFirstLastName] = React.useState("");
  const [secondLastName, setSecondLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [steps, setSteps] = React.useState(1);

  const renderSteps = () => {
    switch (steps) {
      case 1:
        return (
          <View style={styles.form}>
            <Input
              label={"Nombre"}
              placeholder={"Nombre"}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <Input
              label={"Email"}
              placeholder={"Email"}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Input
              label={"Apellido Paterno"}
              placeholder={"Apellido Paterno"}
              onChangeText={(text) => setFirstLastName(text)}
              value={firstLastName}
            />
            <Input
              label={"Apellido Materno"}
              placeholder={"Apellido Materno"}
              onChangeText={(text) => setSecondLastName(text)}
              value={secondLastName}
            />
            <Button
              label="Siguiente"
              theme="primary"
              cxStyles={{
                marginTop: 10,
              }}
              onPress={() => setSteps(2)}
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.form}>
            <Input
              label={"Contraseña"}
              placeholder={"Contraseña"}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            <Input
              label={"Confirmar Contraseña"}
              placeholder={"Confirmar Contraseña"}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={true}
            />
            <Button
              label="Crear Cuenta"
              theme="primary"
              cxStyles={{
                marginTop: 50,
              }}
            />
          </View>
        );

      default:
        return (
          <View style={styles.form}>
            <Input
              label={"Contraseña"}
              placeholder={"Contraseña"}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            <Input
              label={"Confirmar Contraseña"}
              placeholder={"Confirmar Contraseña"}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={true}
            />
            <Button
              label="Siguiente"
              theme="primary"
              onPress={() => setSteps(3)}
            />
          </View>
        );
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <BaseLayout>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      {renderSteps()}
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        {/* <Button label="Crear Cuenta" theme="primary" />
        . */}
      </View>

      <View style={styles.noAccountView}>
        <Text
          style={{
            color: "#A7A7A7",
            fontSize: 16,
            marginBottom: 50,
          }}
        >
          ¿Ya tienes cuenta?
          <Text
            style={{
              color: "#288CE9",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Inicia Sesión
          </Text>
        </Text>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    marginRight: "auto",
    marginLeft: "auto",
  },
  form: {
    width: "100%",
    paddingHorizontal: 20,
  },
  noAccountView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Signup;
