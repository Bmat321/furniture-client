import { StyleSheet, Platform } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    alignItems: "center",
    paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
  },
  separator: {
    height: 16,
  },
});

export { styles };
