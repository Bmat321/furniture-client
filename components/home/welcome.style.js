import { COLORS, SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xLarge + SIZES.small / 2,
    color,
    marginTop: top,
    marginHorizontal: SIZES.small,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
    backgroundColor: COLORS.secondary,
    height:50
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    marginRight: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  camera: {
    width:50,
    height:"100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
