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
import { styles } from "./register.style";
import { BackButton, Button } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { makeRequest } from "../axios";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Password must be 5 characters")
    .required("Required"),
  username: Yup.string()
    .min(5, "Username must be 5 characters")
    .required("Required"),
  location: Yup.string()
    .min(3, "Location must be 3 characters")
    .required("Required"),
  email: Yup.string().email("Provide valid email address").required("Required"),
});

const Register = ({ navigation }) => {
  const [condition, setCondition] = useState({
    loader: false,
    obSecureText: false,
  });

  const isValidForm = () => {
    Alert.alert("Valid Form", "Please provide valid credentials", [
      { text: "OK", onPress: () => {}, style: "default" },
      { defaultIndex: 1 },
    ]);
  };

  const signup = async (values) => {
    setCondition((prev) => ({ ...prev, loader: true }));
    try {
      const res = await makeRequest.post("/auth/register", values);
      if (res.status === 201) {
        navigation.replace("Login");
      }
    } catch (error) {
      console.log(error);
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
            initialValues={{
              email: "",
              password: "",
              username: "",
              location: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => signup(values)}
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
                  <Text style={styles.label}>Username</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.username ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <Ionicons
                      name="person-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Enter username"
                      value={values.username}
                      onChangeText={handleChange("username")}
                      onFocus={() => setFieldTouched("username")}
                      onBlur={() => setFieldTouched("username", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Location</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.location ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Enter location"
                      value={values.location}
                      onChangeText={handleChange("location")}
                      onFocus={() => setFieldTouched("location")}
                      onBlur={() => setFieldTouched("location", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.location && errors.location && (
                    <Text style={styles.errorMessage}>{errors.location}</Text>
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
                      <Ionicons
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
                  title={"S I G N UP"}
                  onPress={isValid ? handleSubmit : isValidForm}
                  isValid={isValid}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;
