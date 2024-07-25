import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Form from "@/components/form/Form";
import CustomButton from "@/components/form/Button";
import { useRouter } from "expo-router";
import { login } from "@/services/auth";

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
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0}
      >
        <Text
          style={{
            fontSize: 24,
            paddingVertical: 20,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
        <View>
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
          <CustomButton title="Log in" fnc={handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
