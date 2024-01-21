import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const SponseredCard = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={{margin:10, alignItems:'center'}}>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "600", color:'gray' }}>
              Sponsered
            </Text>
            <ImageBackground
              imageStyle={{ marginTop:10,borderRadius: 6, resizeMode: "center" }}
              style={{width: 380, height: 100 }}
              source={{
                uri: "https://image.wedmegood.com/resized-nw/1200X/uploads/images/006baed3d1d24576942b3482224cede3catdeskbannerhome/Bridaloutfit.png",
              }}
            ></ImageBackground>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SponseredCard;

const styles = StyleSheet.create({});
