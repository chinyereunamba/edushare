import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Form from "@/components/form/Form";
import CustomButton from "@/components/form/Button";
import { useRouter } from "expo-router";
import { login } from "@/services/auth";
import { Styles } from "@/constants/Styles";
import GoogleIcon from "@/components/form/icon";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const empty = user.email === "" || user.password === "" ? true : false;

  const handleSubmit = async () => {
    try {
      await login(user.email, user.password);
    } catch (err) {
      console.error(err);
    } finally {
      router.push("(tabs)");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0}
      >
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Welcome Back!
          </Text>
          <Text style={[Styles.textSize, Styles.accentText]}>
            To get started sign in to your account
          </Text>
        </View>
        <View>
          <TouchableOpacity style={[{ alignContent: "stretch" }]}>
            <View
              style={{
                borderWidth: 1,
                flexDirection: "row",
                borderColor: "#ddd",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <GoogleIcon />
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>

          <Text
            style={[
              Styles.textSize,
              Styles.accentText,
              { textAlign: "center", marginVertical: 10 },
            ]}
          >
            Or sign in with
          </Text>

          <Form
            inputFields={[
              {
                inputMode: "email",
                keyboardType: "email-address",
                maxLength: 80,
                placeholder: "Email address",
                // label: "Email",
                value: user.email,
                handleChange: (e) => setUser({ ...user, email: e }),
              },
              {
                inputMode: "text",
                keyboardType: "default",
                maxLength: 80,
                placeholder: "Password",
                secureEntry: true,
                // label: "Password",
                value: user.password,
                handleChange: (e) => setUser({ ...user, password: e }),
              },
            ]}
          />
        </View>
        <View>
          <Text
            style={[Styles.textSize, { textAlign: "right", marginVertical: 10 }]}
          >
            Don't have an account?{" "}
            <Text
              onPress={() => router.navigate("/sign-up")}
            >
              Sign up
            </Text>
          </Text>
          <CustomButton title="Sign in" fnc={handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    gap: 30,
    justifyContent: "center",
  },
});
