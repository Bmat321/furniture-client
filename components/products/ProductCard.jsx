import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./productCardRow.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  // console.log("product", product);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product })}
    >
      <View style={styles.container}>
        <View>
          {product?.imageUrl && (
            <Image
              source={{ uri: product?.imageUrl }}
              style={styles.imageWrapper}
              // style={styles.image}
            />
          )}
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {product?.title}
          </Text>
          <Text style={styles.desc} numberOfLines={1}>
            {product?.suplier}
          </Text>
          <Text style={styles.price}>${product?.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
