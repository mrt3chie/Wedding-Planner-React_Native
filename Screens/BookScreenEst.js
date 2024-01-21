import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

import { useNavigation } from "@react-navigation/native";

const BookScreenEst = () => {
  const [selected, setSelected] = React.useState("");

  const culture = [
    { key: "1", value: "Hindu Wedding" },
    { key: "2", value: "Muslim Wedding" },
    { key: "3", value: "Christian Wedding" },
    { key: "5", value: "Jain Wedding" },
    { key: "6", value: "Sikh Wedding" },
  ];

  const location = [
    { key: "1", value: "Tamilnadu" },
    { key: "2", value: "Karnataka" },
    { key: "3", value: "Kerala" },
    { key: "5", value: "Rajasthan" },
    { key: "6", value: "Madhya Pradesh" },
  ];

  const foodtypes = [
    { key: "1", value: "North Indian Cuisine " },
    { key: "2", value: "South Indian Cuisine" },
    { key: "3", value: "Bengali Cuisine" },
    { key: "5", value: "Hyderabadi Cuisine" },
    { key: "6", value: "Rajasthani Cuisine" },
  ];

  const designtype = [
    { key: "1", value: "Hindu Wedding" },
    { key: "2", value: "Muslim Wedding" },
    { key: "3", value: "Christian Wedding" },
    { key: "5", value: "Jain Wedding" },
    { key: "6", value: "Sikh Wedding" },
  ];

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ marginTop: 80, alignItems: "center" }}>
        <View style={{ alignContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/Logo.png")} />
        </View>
        <View
          style={{
            marginTop: 25,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 24, fontWeight: "700" }}
          >
            Smart Booking
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
            placeholder="Budget in (Rs.)"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginBottom: 20,
              height: 56,
              padding: 15,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="Estimated Guests"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginBottom: 20,
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
              width: 300,
              marginBottom: 20,
              height: 56,
              padding: 15,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              textAlign: "center",
              fontSize: 23,
              fontWeight: "600",
            }}
          >
            Wedding Preferences
          </Text>
        </View>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View style={{ marginLeft: 0 }}>
            <SelectList
              placeholder="Select Culture"
              setSelected={(val) => setSelected(val)}
              data={culture}
              save="value"
            />
          </View>
          <View style={{ marginLeft: 7 }}>
            <SelectList
              placeholder="Select Location"
              setSelected={(val) => setSelected(val)}
              data={location}
              save="value"
            />
          </View>
        </View>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View style={{ marginRight: 10 }}>
            <SelectList
              placeholder="Select Food   "
              setSelected={(val) => setSelected(val)}
              data={foodtypes}
              save="value"
            />
          </View>
          <View style={{ marginRight: 5 }}>
            <SelectList
              placeholder="Select Design   "
              setSelected={(val) => setSelected(val)}
              data={designtype}
              save="value"
            />
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("BookScreenSuggestionOne")}
        >
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
              marginBottom: 50,
              color: "white",
            }}
          >
            Analyze
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default BookScreenEst;
