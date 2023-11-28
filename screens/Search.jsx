import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { makeRequest } from "../axios";
import { COLORS, SIZES } from "../constants/theme";
import { styles } from "./search.style";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await makeRequest.get(`/products/search/${searchKey}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            placeholder="Find the best furnitures"
            onChangeText={setSearchKey}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.camera} onPress={handleSearch}>
          <Feather name="search" size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile product={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
