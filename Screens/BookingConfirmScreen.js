import { StyleSheet, Text, View, Pressable, Image} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const BookingConfirmScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{alignItems:'center', marginTop: 50 }}>
      <View style={{marginTop:50}}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={{ marginTop:90}}>
        <Ionicons name="checkmark-circle-sharp" size={100} color="green" />
      </View>
      <View style={{marginTop:10}}>
        <Text style={{fontSize:20, fontWeight:'600'}}>Your Preference Was Saved!</Text>
        <Text style={{fontSize:16, marginTop:10,fontWeight:'500',textAlign:'center'}}>Our Executive will reach you</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('DashboardScreen')}>
          <Text
            style={{
              width: 150,
              backgroundColor: "black",
              padding: 12,
              borderRadius: 7,
              marginTop: 35,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Continue
          </Text>
        </Pressable>
    </View>
  );
};

export default BookingConfirmScreen;

const styles = StyleSheet.create({});
