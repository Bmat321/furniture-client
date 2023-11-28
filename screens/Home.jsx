import {
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductRows from "../components/products/ProductRows";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.bar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>
            {userData ? userData.location : "Nigeria"}
          </Text>
          <View style={{ alignItems: "flex-end", position: "relative" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRows />
      </ScrollView>
      <StatusBar translucent />
    </SafeAreaView>
  );
};

export default Home;
