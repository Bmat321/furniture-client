import { View, SafeAreaView, FlatList, Text } from "react-native";
import React from "react";
import { styles } from "./productList.style";
import {} from "react-native";
import useFetch from "../../hook/useFetch";
import { ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../../constants";
import {} from "react-native";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, isLoading, err } = useFetch();
  console.log("prodddddd", products);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles}>
      <View style={styles.container}>
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
