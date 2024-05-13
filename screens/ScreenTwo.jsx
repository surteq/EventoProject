import React, { useRef, useState } from "react";
import { View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";

const ScreenTwo = () => {
  const imageWidth = Dimensions.get("window").width;
  const imageHeight = Dimensions.get("window").height;

  const [scale, setScale] = useState(1);
  const scrollViewRef = useRef(null);

  const onPinchGestureEvent = (event) => {
    setScale(event.nativeEvent.scale);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      maximumZoomScale={5}
      minimumZoomScale={1}
      centerContent
      contentContainerStyle={styles.scrollViewContainer}
      onZoomEnd={() => setScale(1)}
    >
      <Image
        source={require("../images/map.jpg")}
        style={{
          ...styles.map,
          width: imageWidth * scale,
          height: imageHeight * scale,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    resizeMode: "contain",
  },
});

export default ScreenTwo;
