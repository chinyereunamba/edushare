import ProgressBar from "@/components/utils/ProgressBar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../sign-up";
import { Styles } from "@/constants/Styles";
import CustomButton from "@/components/utils/Button";

type StepOneNavigationProp = StackNavigationProp<RootStackParamList, "StepTwo">;

const StepOne = () => {
  const navigation = useNavigation<StepOneNavigationProp>();
  return (
    <View style={styles.container}>
      <ProgressBar step={1} totalSteps={3} />
      <View style={[styles.slideContent]}>
        <Text style={[Styles.titleText, { textAlign: "center" }]}>
          Sign up as
        </Text>
        <View>
          <CustomButton
            title="Lecturer"
            fnc={() => {
              navigation.navigate("StepTwo");
            }}
          />
          <CustomButton
            title="Student"
            fnc={() => {
              navigation.navigate("StepTwo");
            }}
          />
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
  },
  slideContent: {
    flex: 1,
    marginTop: 100,
    gap: 20,
  },
});
