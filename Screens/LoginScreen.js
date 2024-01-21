import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 90, flex: 1, alignItems: "center" }}>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 28, fontWeight: "800" }}>WELCOME BACK!</Text>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>
          Happy to see you again
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="E-mail/Phone Number"
          placeholderTextColor="gray"
          style={{
            borderWidth: 2,
            borderRadius: 7,
            width: 300,
            height: 56,
            padding: 20,
            fontSize: 13,
            borderColor: "black",
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          style={{
            borderWidth: 2,
            borderRadius: 7,
            width: 300,
            marginTop: 30,
            height: 56,
            padding: 20,
            fontSize: 13,
            borderColor: "black",
          }}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("DashboardScreen")}>
        <Text
          style={{
            width: 200,
            backgroundColor: "black",
            padding: 15,
            borderRadius: 7,
            marginTop: 30,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
          }}
        >
          Login
        </Text>
      </Pressable>
      <View style={{ marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "800" }}>(or)</Text>

        <Pressable onPress={() => navigation.navigate("DashboardScreen")}>
          <Text
            style={{
              width: 250,
              borderWidth: 2,
              backgroundColor: "white",
              padding: 15,
              borderRadius: 7,
              marginTop: 20,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "black",
              fontWeight: "600",
            }}
          >
            Continue with Google
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("DashboardScreen")}>
          <Text
            style={{
              width: 250,
              borderWidth: 2,
              backgroundColor: "#1877F2",
              padding: 15,
              borderRadius: 7,
              marginTop: 15,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              fontWeight: "600",
            }}
          >
            Continue with Facebook
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
          <Text
            style={{
              color: "grey",
              marginTop: 30,
            }}
          >
            New to WeddPlan?
            <Text style={{ fontWeight: "800", color: "black" }}>
              {" "}
              Create an Account
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
