import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    color: COLORS.lightWhite,
  },

  wrapper: {
    marginHorizontal: SIZES.large,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - SIZES.xxLarge,
    zIndex: 999,
  },
  image: {
    height: 400,
    width: 400,
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: SIZES.large,
    paddingBottom: SIZES.small,
    justifyContent: "space-between",
    alignItems: "center",
    top: SIZES.large,
    flexDirection: "row",
    width: SIZES.width - SIZES.xxLarge,
  },
  productRating: {
    paddingBottom: SIZES.small,
    justifyContent: "space-between",
    alignItems: "center",
    top: SIZES.xxSmall,
    flexDirection: "row",
    width: SIZES.width - SIZES.xSmall,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWraper: {
    color: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  descWraper: {
    marginHorizontal: SIZES.large,
    marginTop: SIZES.large * 2,
  },
  desc: {
    fontFamily: "medium",
    fontSize: SIZES.large - 2,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  cartRow: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: SIZES.small,
    width: SIZES.width,
  },

  price: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
    paddingHorizontal: SIZES.xSmalllarge,
  },

  rating: {
    marginHorizontal: SIZES.large,
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.xxSmall,
  },
  location: {
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: SIZES.large,
    backgroundColor: COLORS.secondary,
    padding: 5,
  },
  text: {
    paddingTop: 4,
  },
  cartTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.small,
    color: COLORS.lightWhite,
    marginLeft: SIZES.small - 12,
  },
  cartBtn: {
    width: SIZES.width * 0.28,
    backgroundColor: COLORS.black,
    marginLeft: SIZES.small,
    borderRadius: SIZES.large,
    padding: SIZES.small,
  },
  cartAdd: {
    height: 37,
    width: 37,
    margin: SIZES.small,
    borderRadius: 50,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
