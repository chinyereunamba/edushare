import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ScreenLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTitle: "Settings",
          headerTitleStyle: {
            color: "black",
          },
          headerShadowVisible: false,
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("pressed");
              }}
            >
              <Ionicons name="search" size={22} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="gpa-calculator"
        options={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTitle: "CGPA Calculator",
          headerTitleStyle: {
            color: "black",
          },
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
