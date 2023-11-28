import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { styles } from "./welcome.style";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find the most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          Luxurious Furnitures
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            placeholder="Find the best furnitures"
            onPressIn={() => navigation.navigate("Search")}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.camera}>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
