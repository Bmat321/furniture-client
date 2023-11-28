import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { styles } from "./productCardRow.style";
import useFetch from "../../hook/useFetch";
import { ActivityIndicator } from "react-native";

const ProductRows = () => {
  const { products, isLoading, err } = useFetch();

  return (
    <View style={styles.parent}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : err ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCard product={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRows;
