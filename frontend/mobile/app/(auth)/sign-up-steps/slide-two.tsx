import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ProgressBar from "@/components/utils/ProgressBar";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../sign-up";
import { Styles } from "@/constants/Styles";
import Form from "@/components/utils/Form";
import CustomButton from "@/components/utils/Button";

type StepTwoNavigationProp = StackNavigationProp<
  RootStackParamList,
  "StepThree"
>;

const StepTwo = () => {
  const navigation = useNavigation<StepTwoNavigationProp>();

  return (
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
            },
            {
              inputMode: "text",
              keyboardType: "default",
              maxLength: 20,
              placeholder: "Password",
            },
            {
              inputMode: "text",
              keyboardType: "default",
              maxLength: 20,
              placeholder: "Repeat password",
            },
          ]}
        />
        <CustomButton title="Next" fnc={() => navigation.navigate("StepThree")} />
      </View>
    </View>
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
    gap: 20,
  },
});
