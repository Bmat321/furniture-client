import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./heading.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Heading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>New Arrivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NewArrival")}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
