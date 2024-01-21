import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";
import Menu from "../Components/Menu";
import { useNavigation } from "@react-navigation/native";

const BookScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 80, marginBottom: 80 }}>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={{ marginTop: 50 }}>
        <View style={{ alignContent: "center", justifyContent: "center" }}>
          <Text
            style={{ textAlign: "center", fontSize: 26, fontWeight: "600" }}
          >
            Smart Booking
          </Text>
        </View>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TextInput
            placeholder="Set Budget in (Rs.)"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 360,
              margin: 30,
              height: 56,
              padding: 15,
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Estimated Guests"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 180,
                height: 56,
                padding: 15,
                fontSize: 13,
                borderColor: "gray",
              }}
            />
            <TextInput
              placeholder="Wedding Days"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 150,
                height: 56,
                padding: 15,
                marginLeft: 25,
                fontSize: 13,
                borderColor: "gray",
              }}
            />
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("BookScreenEst")}>
          <Text
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 18,
              borderRadius: 7,
              marginTop: 35,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Analyze
          </Text>
        </Pressable>
        <View
          style={{
            marginTop: 40,
            backgroundColor: "#EEEEEE",
            borderRadius: 10,
            margin: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "500",
              marginTop: 20,
            }}
          >
            Why Smart Booking
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "gray",
              paddingLeft: 25,
              paddingRight: 20,
              textAlign: "left",
            }}
          >
            Smart booking is a convenient and efficient way for customers to
            make appointments and reservations.
          </Text>
        </View>
      </View>
      <View style={{ bottom: -160 }}>
        <Menu />
      </View>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
