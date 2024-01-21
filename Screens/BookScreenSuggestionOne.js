import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import ServiceImages from "../Components/ServiceImages";
import { useNavigation } from "@react-navigation/native";

const BookScreenSuggestionOne = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{ alignContent: "center", alignItems: "center", marginTop: 50 }}
      >
        <Image source={require("../assets/Logo.png")} />
      </View>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              margin: 25,
            }}
          >
            <Text
              style={{ textAlign: "left", fontSize: 20, fontWeight: "800" }}
            >
              Smart Booking
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ padding: 5, fontWeight: "500", fontSize: 15 }}>
              Budget in (Rs.)
            </Text>
            <TextInput
              placeholder="10,00,000"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 180,
                height: 30,
                padding: 4,
                paddingLeft: 15,
                marginLeft: 30,
                fontSize: 14,
                color: "gray",
                borderColor: "gray",
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ padding: 5, fontWeight: "500", fontSize: 15 }}>
              Estimated Guests
            </Text>
            <TextInput
              placeholder="500"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 180,
                height: 30,
                padding: 4,
                marginLeft: 10,
                paddingLeft: 15,
                fontSize: 14,
                color: "gray",
                borderColor: "gray",
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ padding: 5, fontWeight: "500", fontSize: 15 }}>
              Wedding Days
            </Text>
            <TextInput
              placeholder="2"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 180,
                height: 30,
                padding: 4,
                paddingLeft: 15,
                marginLeft: 45,
                fontSize: 14,
                color: "gray",
                borderColor: "gray",
              }}
            />
          </View>
          <View
            style={{
              marginTop: 30,
              marginLeft: 20,
              marginBottom: 10,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Suggestions</Text>
            <Pressable
              onPress={() => navigation.navigate("BookingConfirmScreen")}
            >
              <Text
                style={{
                  width: 70,
                  fontWeight: "500",
                  backgroundColor: "#D9D9D9",
                  padding: 5,
                  borderRadius: 7,
                  fontSize: 10,
                  textAlign: "center",
                  color: "black",
                  marginLeft: 60,
                }}
              >
                Book
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("BookScreenSuggestionTwo")}
            >
              <Text
                style={{
                  width: 100,
                  fontWeight: "500",
                  backgroundColor: "#D9D9D9",
                  padding: 5,
                  borderRadius: 7,
                  fontSize: 10,
                  textAlign: "center",
                  color: "black",
                  marginLeft: 10,
                }}
              >
                Regenerate
              </Text>
            </Pressable>
          </View>

          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[0].image }}
                  style={styles.img}
                />
              </View>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[1].image }}
                  style={styles.img}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[2].image }}
                  style={styles.img}
                />
                <Text
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    fontSize: 12,
                    fontWeight: "500",
                    color: "black",
                    padding: 4,
                    borderRadius: 7,
                    backgroundColor: "#D9D9D9",
                  }}
                >
                  Remove
                </Text>
              </View>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[3].image }}
                  style={styles.img}
                />
                <Text
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    fontSize: 12,
                    fontWeight: "500",
                    color: "black",
                    padding: 4,
                    borderRadius: 7,
                    backgroundColor: "#D9D9D9",
                  }}
                >
                  Remove
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[4].image }}
                  style={styles.img}
                />
              </View>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[5].image }}
                  style={styles.img}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[6].image }}
                  style={styles.img}
                />
              </View>
              <View style={styles.rowbox}>
                <Image
                  source={{ uri: ServiceImages[7].image }}
                  style={styles.img}
                />
                <Text
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    fontSize: 12,
                    fontWeight: "500",
                    color: "black",
                    padding: 4,
                    borderRadius: 7,
                    backgroundColor: "#D9D9D9",
                  }}
                >
                  Remove
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookScreenSuggestionOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 120,
  },
  row: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    height: 180,
    width: 180,
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 5,
    borderRadius: 15,
  },
});
