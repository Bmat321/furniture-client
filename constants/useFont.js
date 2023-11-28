import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    "light": require("../assets/fonts/Poppins-Light.ttf"),
    "regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "extrabold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
};
