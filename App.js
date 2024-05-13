import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import ScreenFour from "./screens/ScreenFour";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={ScreenOne}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={"black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={ScreenTwo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="map-marked-alt" size={size} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={ScreenThree}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ScreenFour}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
