import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "@/components/utils/Form";
import CustomButton from "@/components/utils/Button";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const empty = user.email === "" || user.password === "" ? true : false;
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
        </View>
        <View>
          <CustomButton
            title="Log in"
            color={Colors.light.background}
            bg={empty ? Colors.light.primary600 : Colors.light.primary}
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
    gap: 20,
    justifyContent: "center",
  },
});
