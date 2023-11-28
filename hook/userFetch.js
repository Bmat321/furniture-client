import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";

const userFetch = () => {
  const [userLogin, setUserLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    checkUserExist();
  }, []);

  const checkUserExist = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);
      if (currentUser !== null) {
        const parseData = JSON.parse(currentUser);
        setUserData(parseData);
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return userData, userLogin;
};

export default userFetch;
