import ProgressBar from "@/components/form/ProgressBar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../sign-up";
import { Styles } from "@/constants/Styles";
import CustomButton from "@/components/form/Button";
import useUserData from "@/context/signUpContext";
import { fetchData, login } from "@/services/auth";

type StepTwoNavigationProp = StackNavigationProp<RootStackParamList, "StepTwo">;

const StepTwo = () => {
  const navigation = useNavigation<StepTwoNavigationProp>();
  const setUserType = useUserData((state) => state.setUserType);
  const userType = useUserData((state) => state.userType);

  useEffect(() => {
    // console.log("User Type changed:", userType);
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
            fnc={async () => {
              setUserType("Student");
              navigation.navigate("StepThree");
            }}
          />
        </View>
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
