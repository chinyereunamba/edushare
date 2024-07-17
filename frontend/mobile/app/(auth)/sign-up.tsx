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
import { Link } from "expo-router";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const empty =
    user.email === "" || user.password === "" || user.rePassword === ""
      ? true
      : false;
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
          Sign Up
        </Text>
        <Form
          inputList={[
            {
              name: "email",
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
            {
              name: "password",
              label: "Re-enter Password",
              type: "text",
              placeholder: "********",
              value: user.rePassword,
              handleChange: (e) => {
                setUser({ ...user, rePassword: e });
              },
            },
          ]}
        />
        <View>
          <CustomButton
            title="Sign up"
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
  },
});
