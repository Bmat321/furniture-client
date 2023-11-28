import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  cover: {
    width: "100%",
    height: 290,
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    borderWidth: 2,
    height: 155,
    width: 155,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    marginTop: -90,
    resizeMode: "cover",
  },
  name: {
    marginVertical: 5,
    fontFamily: "bold",
    color: COLORS.primary,
  },
  loginBtn: {
    borderWidth: 0.4,
    padding: 2,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.tertiary,
    borderRadius: SIZES.xxLarge,
  },
  menuText: {
    fontFamily: "regular",
    color: COLORS.gray,
    lineHeight: 26,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 4,
  },
  menuWrapper: {
    marginTop: SIZES.xLarge,
    width: SIZES.width - SIZES.large,
    borderRadius: 12,
    backgroundColor: COLORS.lightWhite,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
  }),
});

export { styles };
