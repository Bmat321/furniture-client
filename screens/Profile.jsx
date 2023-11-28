import { Text, Alert, View, StatusBar, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./profile.style";
import { COLORS } from "../constants/theme";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

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

  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([userId, "id"]);
      navigation.replace("Bottom Navigator");
    } catch (error) {
      console.log("Erro logging out the user", error);
    }
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      { text: "Continue", onPress: () => userLogout() },
      // { defaultIndex: 1 },
    ]);
  };
  const clearCache = () => {
    Alert.alert("Clear device cache", "Are you sure you want to clear cache", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
      // { defaultIndex: 1 },
    ]);
  };
  const deleteAccount = () => {
    Alert.alert("Logout", "Are you sure you want to delete account", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
      // { defaultIndex: 1 },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === false ? "Bmat" : "Please login to your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>LOGIN </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>bmattnew@gmail.com </Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Favorite</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Order")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons
                    name="bag"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clearCache();
                }}
              >
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="cached"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Cache</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteAccount();
                }}
              >
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                    name="deleteuser"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
