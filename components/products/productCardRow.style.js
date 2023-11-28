import { COLORS, SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  parent: { marginTop: SIZES.medium, marginLeft: SIZES.medium },

  container: {
    width: 180,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    position: "relative",
  },
  imageWrapper: {
    // flex: 1,
    height: 140,
    width: 150,
    // width: 170,
    marginTop: SIZES.small / 2,
    marginLeft: SIZES.small / 2,
    borderRadius: SIZES.medium,
    overflow: "hidden",
    aspectRatio: 1.2,
    resizeMode: "cover",
  },

  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  desc: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray2,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    right: SIZES.xSmall,
    bottom: SIZES.xSmall,
  },
});

export { styles };
