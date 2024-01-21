import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { onPress } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menucontainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("DashboardScreen")}
      >
        <Image
          source={require("../assets/icons/Vector.png")}
          style={styles.iconStyle}
        />
        {/* <Text style={styles.iconText}>Home</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("ServiceScreen")}
      >
        <Image
          source={require("../assets/icons/Vector-1.png")}
          style={styles.iconStyle}
        />
        {/* <Text style={styles.iconText}>Services</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => navigation.navigate("BookScreen")}
      >
        <Image
          source={require("../assets/icons/Vector-2.png")}
          style={{ width: 30, height: 30 }}
        />
        {/* <Text style={styles.iconText}>Book</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Image
          source={require("../assets/icons/Vector-3.png")}
          style={styles.iconStyle}
        />
        {/* <Text style={styles.iconText}>Profile</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menucontainer: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 0,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 15,
    paddingBottom: 0,
    elevation: 8, // Set the elevation to add shadow (works on Android)
  },

  buttonStyle: {
    alignItems: "center",
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
  iconText: {
    fontSize: 8,
  },
});
