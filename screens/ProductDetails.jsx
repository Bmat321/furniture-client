import { TouchableOpacity, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { styles } from "./productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const { product } = useRoute().params;

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      {product?.imageUrl && (
        <Image source={{ uri: product?.imageUrl }} style={styles.image} />
      )}
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWraper}>
            <Text style={styles.price}>${product?.price}</Text>
          </View>
        </View>

        <View style={styles.productRating}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={20} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descWraper}>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.descText}>{product?.desc}</Text>
        </View>
        <View style={{ marginBottom: SIZES.large }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text style={styles.text}> {product?.product_location}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text style={styles.text}> Free delivery </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}> BUY NOW </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.cartAdd}>
            <Text style={styles.cartTitle}>
              <Fontisto
                name="shopping-bag"
                size={20}
                color={COLORS.lightWhite}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
