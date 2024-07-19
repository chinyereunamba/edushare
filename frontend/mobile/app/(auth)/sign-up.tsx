import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StepOne from "./sign-up-steps/slide-one";
import StepTwo from "./sign-up-steps/slide-two";
import StepThree from "./sign-up-steps/slide-three";

export type RootStackParamList = {
  StepOne: undefined;
  StepTwo: undefined;
  StepThree: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="StepOne"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="StepOne"
        component={StepOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepTwo"
        component={StepTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepThree"
        component={StepThree}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
