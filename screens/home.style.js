import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  wrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    height: 16,
    width: 16,
    bottom: 16,
    // top: 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    backgroundColor: "green",
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});

export { styles };
