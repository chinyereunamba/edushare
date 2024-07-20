import React, { useState, useSyncExternalStore } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import ProgressBar from "@/components/utils/ProgressBar";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../sign-up";
import { Styles } from "@/constants/Styles";
import Form from "@/components/utils/Form";
import CustomButton from "@/components/utils/Button";
import useUserData from "@/context/signUpContext";

type StepTwoNavigationProp = StackNavigationProp<
  RootStackParamList,
  "StepThree"
>;

const StepTwo = () => {
  const navigation = useNavigation<StepTwoNavigationProp>();
  const createUser = useUserData((state) => state.createUser);
  const [user, setUser] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const { email, password } = useUserData((state) => {
    return { email: state.email, password: state.password };
  });

  const handleSubmit = () => {
    createUser(user.email, user.password);
    navigation.navigate("StepThree");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <ProgressBar step={2} totalSteps={3} />
          <View style={styles.slideContent}>
            <Text style={[Styles.titleText, { textAlign: "center" }]}>
              Create your account
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
            <CustomButton title="Next" fnc={handleSubmit} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  slideContent: {
    flex: 1,
    marginTop: 100,
    gap: 30,
  },
});
