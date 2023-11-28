import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./searchTile.style";
import {} from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchTile = ({ product }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ProductDetails", { product })}
      >
        <View style={styles.image}>
          {product.imageUrl && (
            <Image source={{ uri: product.imageUrl }} style={styles.pImage} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productSup}>{product.suplier}</Text>
          <Text style={styles.productTitle}>{product.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTile;
