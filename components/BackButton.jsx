import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.back}>
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  back: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 999,
    top: SIZES.large - 10,
  },
});
