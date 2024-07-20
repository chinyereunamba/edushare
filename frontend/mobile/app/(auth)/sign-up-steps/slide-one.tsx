import ProgressBar from "@/components/utils/ProgressBar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../sign-up";
import { Styles } from "@/constants/Styles";
import CustomButton from "@/components/utils/Button";
import useUserData from "@/context/signUpContext";

type StepOneNavigationProp = StackNavigationProp<RootStackParamList, "StepTwo">;

const StepOne = () => {
  const navigation = useNavigation<StepOneNavigationProp>();
  const setUserType = useUserData((state) => state.setUserType);
  const userType = useUserData((state) => state.userType);

  useEffect(() => {
    console.log("User Type changed:", userType);
  }, [userType]);

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
              setUserType("Lecturer");
              navigation.navigate("StepTwo");
            }}
          />
          <CustomButton
            title="Student"
            fnc={() => {
              setUserType("Student");
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