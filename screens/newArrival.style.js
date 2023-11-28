import { Platform, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: COLORS.lightWhite,
    position: "relative",
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    width: SIZES.width - 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: SIZES.large,
    backgroundColor: COLORS.primary,
    position: "absolute",
    top: SIZES.large,
    zIndex: 999,
    borderRadius: SIZES.large,
    alignItems: "center",
  },
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
});

export { styles };
