import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
export const ScreenThree = () => {
  const initialRegion = {
    latitude: 51.1079,
    longitude: 17.0385,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    // <View style={styles.screen}>
    //   <Text>Screen Three!</Text>
    // </View>
    <MapView style={{ flex: 1 }} initialRegion={initialRegion} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScreenThree;
