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
import Menu from "../Components/Menu";

import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 50, marginBottom: 80 }}>
      <View style={{ alignItems: "center", marginBottom: 15 }}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <View style={{ alignContent: "center", justifyContent: "center" }}>
          <Text
            style={{ textAlign: "center", fontSize: 22, fontWeight: "700" }}
          >
            Profile
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
              marginTop: 20,
              height: 56,
              padding: 15,
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
              padding: 15,
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
              padding: 15,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="Address"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop: 20,
              height: 56,
              padding: 15,
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
                padding: 15,
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
                padding: 15,
                fontSize: 13,
                borderColor: "gray",
              }}
            />
          </View>
        </View>
        <Pressable>
          <Text
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 18,
              borderRadius: 7,
              marginTop: 15,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Edit Profile
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 18,
              borderRadius: 7,
              marginTop: 10,
              marginBottom: 10,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Log Out
          </Text>
        </Pressable>
      </View>
      <View style={{ bottom: -150 }}>
        <Menu />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
