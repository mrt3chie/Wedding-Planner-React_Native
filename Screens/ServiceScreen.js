import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import ServiceImages from "../Components/ServiceImages";
import ServieCategory from "../Components/ServieCategory";
import Menu from "../Components/Menu";

const ServiceScreen = () => {
  return (
    <View style={{ marginTop: 50, marginBottom: 90 }}>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <View style={{ alignContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 26, fontWeight: "700" }}>Services</Text>
          </View>
          <View style={{ marginTop: 20, marginBottom: 50 }}>
            <ServieCategory />
          </View>
        </View>
      </ScrollView>
      <View>
        <Menu />
      </View>
    </View>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({});
