import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

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
            // backgroundColor: "transparent",
          },
          headerTitle: "Settings",
          headerTitleStyle: {
            color: "white",
          },
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
