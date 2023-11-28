import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    flexDirection: "row",
    paddingBottom: SIZES.small,
    ...SHADOWS.medium,
    backgroundColor: "#fff",
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  pImage: {
    width: "100%",
    height: 65,
    resizeMode: "cover",
    borderRadius: SIZES.small,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  productTitle: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  productSup: {
    fontFamily: "regular",
    fontSize: SIZES.small + 2,
    marginTop: 3,
    color: COLORS.gray,
  },
});

export { styles };
