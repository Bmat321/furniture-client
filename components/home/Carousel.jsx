import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const Carousel = () => {
  const slider = [
    require("../../assets/images/fn1.jpg"),
    require("../../assets/images/fn2.jpg"),
    require("../../assets/images/fn4.jpg"),
    require("../../assets/images/fn3.jpg"),
  ];
  return (
    <View style={styles.carouselContatiner}>
      <SliderBox
        images={slider}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "92%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

export const styles = StyleSheet.create({
  carouselContatiner: {
    flex: 1,
    alignItems: "center",
  },
});
