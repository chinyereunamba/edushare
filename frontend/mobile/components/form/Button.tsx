import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";

type Props = {
  title: string;
  fnc: (e?: any) => void;
  color?: string;
  bg?: string;
  icon?: React.JSX.Element;
  style?: ViewStyle;
  disabled?: boolean;
};

export default function CustomButton({
  title,
  fnc,
  color,
  bg,
  icon,
  disabled,
  style,
}: Props) {
  return (
    <TouchableOpacity
      onPress={fnc}
      style={[
        styles.buttonContainer,
        style,
        {
          backgroundColor: !disabled ? Colors.primary : Colors.light.primary600,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: Colors.light.background,
            gap: 10,
            alignItems: "center",
          },
        ]}
      >
        <Text style={{ marginRight: 50, borderWidth: 2 }}>{icon}</Text>
        <Text>{title}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    borderRadius: 8,
    lineHeight: 1.5,
    fontSize: 18,
    marginVertical: 8,
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 17,
    alignSelf: "stretch",
    gap: 16,
  },
});
