import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Form from "@/components/form/Form";
import CustomButton from "@/components/form/Button";
import { useRouter } from "expo-router";
import { login } from "@/services/auth";
import { Styles } from "@/constants/Styles";
import GoogleIcon from "@/components/form/icon";
import { UserProps } from "@/types";
import useUser from "@/context/userContext";
import api from "@/services/api";
import { Colors } from "@/constants/Colors";

export default function Login() {
  const router = useRouter();
  const [getUser, setGetUser] = useState({
    email: "",
    password: "",
  });
  const empty = getUser.email === "" || getUser.password === "" ? true : false;

  const { saveUser, user } = useUser();
  const handleSubmit = async () => {
    try {
      const res = await api({
        url: "/api/auth/login/",
        data: JSON.stringify({
          email: getUser.email,
          username: getUser.email, // Ensure this is correct
          password: getUser.password,
        }),
        method: "POST",
      });

      const data = res.data;
      console.log("user: ", data);

      const newUser: UserProps = {
        accessToken: data.access,
        refreshToken: data.refresh,
        user: {
          email: data.user.email,
          pk: data.user.pk,
          username: data.user.username,
          isSuperUser: data.user.is_superuser,
          firstName: data.user.first_name,
          lastName: data.user.last_name,
        },
      };

      saveUser(newUser);

      console.log("This fresh login", newUser.user);
      router.replace("(tabs)/");
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <View style={styles.container}>
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
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0}
        >
          <Form
            inputFields={[
              {
                inputMode: "email",
                keyboardType: "email-address",
                maxLength: 80,
                placeholder: "Email address",
                value: getUser.email,
                handleChange: (e) => setGetUser({ ...getUser, email: e }),
              },
              {
                inputMode: "text",
                keyboardType: "default",
                maxLength: 80,
                placeholder: "Password",
                secureEntry: true,
                value: getUser.password,
                handleChange: (e) => setGetUser({ ...getUser, password: e }),
              },
            ]}
          />
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text
              style={[
                Styles.textSize,
                {
                  textAlign: "right",
                  fontSize: 14,
                },
              ]}
            >
              Don't have an account?{" "}
              <Text
                style={{ color: Colors.primary, fontWeight: "700" }}
                onPress={() => router.navigate("/sign-up")}
              >
                Sign up
              </Text>
            </Text>
            <Text
              style={[
                Styles.textSize,
                {
                  color: Colors.primary,
                  fontWeight: "700",
                  textAlign: "right",
                  fontSize: 14,
                },
              ]}
              onPress={() => router.navigate("/reset-password")}
            >
              Forgot password?
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>

      <View>
        <CustomButton disabled={empty} title="Sign in" fnc={handleSubmit} />
      </View>
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
