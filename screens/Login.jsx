import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./login.style";

import { BackButton, Button } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { makeRequest } from "../axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Password must be 5 characters")
    .required("Required"),
  email: Yup.string().email("Provide valid email address").required("Required"),
});

const Login = ({ navigation }) => {
  const [condition, setCondition] = useState({
    loader: false,
    obSecureText: false,
  });

  const isValidForm = () => {
    Alert.alert("Valid Form", "Please provide valid credentials", [
      {
        text: "ok",
        onPress: () => {},
        style: "default",
      },
    ]);
  };

  const login = async (values) => {
    setCondition((prev) => ({ ...prev, loader: true }));
    try {
      const res = await makeRequest.post("/auth/login", values);
      console.log(res.data);
      if (res.status === 200) {
        await AsyncStorage.setItem(
          `user${res.data._id}`,
          JSON.stringify(res.data)
        );

        await AsyncStorage.setItem("id", JSON.stringify(res.data?._id));

        navigation.replace("Bottom Navigator");
      } else {
        Alert.alert("Error", "Please provide valid credentials", [
          {
            text: "ok",
            onPress: () => {},
            style: "default",
          },
        ]);
      }
    } catch (error) {
      if (error === "_id") {
        return;
      } else {
        Alert.alert("Error", "Oop!, Error login try again", [
          {
            text: "ok",
            onPress: () => {},
            style: "default",
          },
        ]);
      }
    } finally {
      setCondition((prev) => ({ ...prev, loader: false }));
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/images/bk.png")}
            style={styles.cover}
          />

          <Text style={styles.title}>Unlimited Luxirous Furniture</Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
              touched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Enter email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onFocus={() => setFieldTouched("email")}
                      onBlur={() => setFieldTouched("email", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Enter password"
                      secureTextEntry={condition.obSecureText}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => setFieldTouched("password", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setCondition((prev) => ({
                          ...prev,
                          obSecureText: !condition.obSecureText,
                        }))
                      }
                    >
                      <MaterialCommunityIcons
                        name={
                          condition.obSecureText
                            ? "eye-outline"
                            : "eye-off-outline"
                        }
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <Button
                  loader={condition.loader}
                  title={"L O G I N"}
                  onPress={isValid ? handleSubmit : isValidForm}
                  isValid={isValid}
                />
                <Text
                  onPress={() => navigation.navigate("Register")}
                  style={styles.register}
                >
                  Sign Up
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
