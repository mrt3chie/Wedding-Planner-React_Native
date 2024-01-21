import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const ClientCard = () => {
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ margin: 10, fontSize: 16, fontWeight: "700" }}>
          Client Spotlight
        </Text>
      </View>
      <View>
        <View style={{alignItems:'center'}}>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ width: 390, height: 200, marginBottom:30 }}
            source={{
              uri: "https://english.mathrubhumi.com/image/contentid/policy:1.7593990:1654845912/PTI06_09_2022_000174A%20(2).jpg?$p=6255904&f=16x10&w=856&q=0.8",
            }}
          >
            <View>
              <Text
                style={{
                  position: "absolute",
                  marginTop:150,
                  width:390,
                  fontSize: 10,
                  color: "black",
                  backgroundColor:'#D9D9D9',
                  textAlign:'center',
                  paddingTop:3,
                  height:40,
                }}
              >
                <Text style={{fontWeight:'bold'}}>" WeddPlan</Text> helped me to have the wedding of my dreams and made the
                entire process stress free "
              </Text>
            </View>
          </ImageBackground>

          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ width: 390, height: 200, marginBottom:20 }}
            source={{
              uri: "https://images.indianexpress.com/2023/02/sidkiara-1200.jpg",
            }}
          >
            <View>
              <Text
                style={{
                  position: "absolute",
                  marginTop:150,
                  width:390,
                  fontSize: 10,
                  color: "black",
                  backgroundColor:'#D9D9D9',
                  textAlign:'center',
                  paddingTop:3,
                  height:40,
                }}
              >
                <Text style={{fontWeight:'bold'}}>" WeddPlan</Text> helped me to have the wedding of my dreams and made the
                entire process stress free "
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default ClientCard;

const styles = StyleSheet.create({});
