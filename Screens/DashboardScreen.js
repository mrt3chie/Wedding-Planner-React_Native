import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import ImageSliderCard from "../Components/ImageSliderCard";
import SponseredCard from "../Components/SponseredCard";
import ClientCard from "../Components/ClientCard";
import Menu from "../Components/Menu";

const DashboardScreen = () => {
  return (
    <View style={{ marginTop: 50, marginBottom: 90 }}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <ScrollView>
        <SponseredCard />
        <ImageSliderCard />
        <ClientCard />
      </ScrollView>

      <Menu />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
