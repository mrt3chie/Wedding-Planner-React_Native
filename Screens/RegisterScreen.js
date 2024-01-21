import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ marginTop: 80, alignItems: "center" }}>
        <View style={{ alignContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/Logo.png")} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ textAlign: "center", fontSize: 26, fontWeight: "600" }}
          >
            Create an Account
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Name"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop: 30,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop: 20,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop: 20,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="State"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop: 20,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Pincode"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 130,
                marginTop: 20,
                height: 56,
                padding: 20,
                fontSize: 13,
                borderColor: "gray",
              }}
            />
            <TextInput
              placeholder="City"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 150,
                marginTop: 20,
                marginLeft: 20,
                height: 56,
                padding: 20,
                fontSize: 13,
                borderColor: "gray",
              }}
            />
          </View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop: 20,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 18,
              borderRadius: 7,
              marginTop: 25,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
