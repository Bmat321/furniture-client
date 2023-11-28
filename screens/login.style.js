import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    marginHorizontal: 20,
  },
  cover: {
    height: SIZES.height / 2,
    width: SIZES.width - 60,
    resizeMode: "contain",
    marginBottom: SIZES.xxLarge,
  },
  title: {
    fontFamily: "bold",
    color: COLORS.primary,
    fontSize: COLORS.xLarge,
    marginBottom: SIZES.xLarge,
    alignItems: "center",
  },
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "regular",
    marginBottom: 5,
    marginEnd: 5,
    fontSize: SIZES.xSmall,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    flexDirection: "row",
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 15,
    alignItems: "center",
  }),

  icon: {
    marginRight: 10,
  },
  errorMessage: {
    fontFamily: "regular",
    marginLeft: 5,
    marginTop: 5,
    color: COLORS.red,
    fontSize: SIZES.xSmall,
  },
  register: {
    marginTop: 20,
    textAlign: "center",
  },
});

export { styles };
