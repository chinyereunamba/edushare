import React, { useState, useSyncExternalStore } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../sign-up";
import { Styles } from "@/constants/Styles";
import Form from "@/components/form/Form";
import CustomButton from "@/components/form/Button";
import useUserData from "@/context/signUpContext";
import GoogleIcon from "@/components/form/icon";
import api from "@/services/api";
import { UserProps } from "@/types";
import useUser from "@/context/userContext";
import { Colors } from "@/constants/Colors";

type StepOneNavigationProp = StackNavigationProp<
  RootStackParamList,
  "StepThree"
>;

const StepOne = () => {
  const navigation = useNavigation<StepOneNavigationProp>();
  const createUser = useUserData((state) => state.createUser);
  const [user, setUser] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const router = useRouter();
  const [response, setResponse] = useState<UserProps>({
    accessToken: "",
    refreshToken: "",
    user: {
      pk: null,
      email: "",
      username: "",
      isSuperUser: false,
      firstName: "",
      lastName: "",
    },
  });
  const { saveUser, loadUser } = useUser();

  const handleSubmit = async () => {
    createUser(user.email, user.password);

    api({
      url: "api/auth/register/",
      data: JSON.stringify({
        email: user.email,
        password1: user.password,
        password2: user.rePassword,
      }),
      method: "POST",
    })
      .then((res) => {
        const data = res.data;
        console.log("user: ", res.data);
        setResponse({
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
        });
        saveUser(response);
        console.log("data", response);
      })
      .then(() => {
        loadUser();
      });

    router.push("(tabs)");

    // navigation.navigate("StepTwo");
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginBottom: 30 }}>
          <Text style={[Styles.titleText]}>Create your account</Text>
          <Text style={[Styles.accentText, Styles.textSize]}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0}
        >
          <View>
            <Form
              inputFields={[
                {
                  inputMode: "email",
                  keyboardType: "email-address",
                  maxLength: 100,
                  placeholder: "Email address",
                  value: user.email,
                  handleChange: (e) => {
                    setUser({ ...user, email: e });
                  },
                },
                {
                  inputMode: "text",
                  keyboardType: "default",
                  maxLength: 20,
                  placeholder: "Password",
                  secureEntry: true,
                  value: user.password,
                  handleChange: (e) => {
                    setUser({ ...user, password: e });
                  },
                },
                {
                  inputMode: "text",
                  keyboardType: "default",
                  maxLength: 20,
                  placeholder: "Repeat password",
                  secureEntry: true,
                  value: user.rePassword,
                  handleChange: (e) => setUser({ ...user, rePassword: e }),
                },
              ]}
            />
            <Text
              style={[
                Styles.textSize,
                {
                  textAlign: "right",
                  marginVertical: 10,
                  color: Colors.accent,
                  fontSize:14
                },
              ]}
            >
              Already have an account?{" "}
              <Text
                style={{ color: Colors.primary, fontWeight: "700" }}
                onPress={() => router.back()}
              >
                Sign in
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>

        <View>
          <CustomButton disabled title="Sign up" fnc={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
});
