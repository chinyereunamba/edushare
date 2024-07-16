import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "@/components/utils/InputField";
import CustomButton from "@/components/utils/Button";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
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
        <Form
          inputList={[
            {
              name: "Email",
              label: "Email",
              type: "email",
              placeholder: "johndoe@mail.com",
              value: user.email,
              handleChange: (e) => {
                setUser({ ...user, email: e });
              },
            },
            {
              name: "password",
              label: "Password",
              type: "text",
              placeholder: "********",
              value: user.password,
              handleChange: (e) => {
                setUser({ ...user, password: e });
              },
            },
          ]}
        />
        <View>
          <CustomButton
            title="Log in"
            color={Colors.light.background}
            bg={Colors.light.primary}
            fnc={() => {}}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    gap: 27,
    justifyContent: "center",
  },
});
