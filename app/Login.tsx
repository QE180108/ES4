import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          await AsyncStorage.setItem("session", JSON.stringify({ isLoggedIn: true, email: values.email }));
          router.replace("/Task");
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

            <View style={styles.passwordRow}>
              <TextInput
                placeholder="Password"
                style={[styles.input, { flex: 1 }]}
                secureTextEntry={!showPassword}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={{ marginLeft: 8 }}>{showPassword ? "🙈 " : "👁️"}</Text>
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

            <Button title="Login" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 10 },
  error: { color: "red", marginBottom: 8 },
  passwordRow: { flexDirection: "row", alignItems: "center" },
});
