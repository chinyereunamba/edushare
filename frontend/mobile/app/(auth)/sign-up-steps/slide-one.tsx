import React, { useState, useSyncExternalStore } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../sign-up";
import { Styles } from "@/constants/Styles";
import Form from "@/components/form/Form";
import CustomButton from "@/components/form/Button";
import useUserData from "@/context/signUpContext";
import GoogleIcon from "@/components/form/icon";

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
  const handleSubmit = async () => {
    createUser(user.email, user.password);
    
    navigation.navigate("StepTwo");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View>
          <View style={{ marginBottom: 30 }}>
            <Text style={[Styles.titleText]}>Create your account</Text>
            <Text style={[Styles.accentText, Styles.textSize]}>
              Lorem ipsum dolor sit amet.
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
                  Sign up with Google
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
              Or sign up with
            </Text>
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
          </View>

          <View>
            <Text
              style={[
                Styles.textSize,
                { textAlign: "right", marginVertical: 10 },
              ]}
            >
              Already have an account?{" "}
              <Text onPress={() => router.back()}>Sign in</Text>
            </Text>
          </View>
          <CustomButton title="Sign up" fnc={handleSubmit} />
        </View>
      </KeyboardAvoidingView>
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
