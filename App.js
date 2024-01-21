import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./Screens/SplashScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import ServiceScreen from "./Screens/ServiceScreen";
import BookScreen from "./Screens/BookScreen";
import BookScreenEst from "./Screens/BookScreenEst";
import BookScreenSuggestionOne from "./Screens/BookScreenSuggestionOne";
import BookScreenSuggestionTwo from "./Screens/BookScreenSuggestionTwo";
import BookingConfirmScreen from "./Screens/BookingConfirmScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Splash">
          {(props) => <SplashScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceScreen"
          component={ServiceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookScreen"
          component={BookScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookScreenSuggestionOne"
          component={BookScreenSuggestionOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookScreenSuggestionTwo"
          component={BookScreenSuggestionTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookingConfirmScreen"
          component={BookingConfirmScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookScreenEst"
          component={BookScreenEst}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //  <SplashScreen />
    // {/* <LoginScreen /> */}
    // {/* <RegisterScreen /> */}
    // {/* <ProfileScreen /> */}
    // {/* <BookingConfirmScreen /> */}
    // {/* <BookScreenSuggestionTwo /> */}
    // {/* <BookScreenSuggestionOne /> */}
    // {/* <BookScreenEst /> */}
    // {/* <BookScreen /> */}
    // {/* <ServiceScreen /> */}
    // {/* <DashboardScreen /> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
