import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { COLORS } from "../../constants/theme";

const Button = ({ title, onPress, isValid, loader }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnContainer(
        isValid === false ? COLORS.gray : COLORS.primary
      )}
    >
      {loader === false ? (
        <Text style={styles.text}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: (backgroundColor) => ({
    width: "100%",
    height: 50,
    backgroundColor: backgroundColor,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  }),
  text: {
    fontFamily: "bold",
    fontSize: 18,
    color: COLORS.white,
  },
});
