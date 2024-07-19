import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Form from "@/components/utils/Form";
import CustomButton from "@/components/utils/Button";
import { Colors } from "@/constants/Colors";

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
            inputFields={[
              {
                inputMode: "email",
                keyboardType: "email-address",
                maxLength: 80,
                placeholder: "johndoe@mail.com",
                label: 'Email'
              },
              {
                inputMode: "text",
                keyboardType: "default",
                maxLength: 80,
                placeholder: "*********",
                secureEntry: true,
                label:"Password"
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
