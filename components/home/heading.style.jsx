import { COLORS, SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.small,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge - SIZES.medium / 6,
  },
});

export { styles };
