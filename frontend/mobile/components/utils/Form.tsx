import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import React, { PropsWithChildren, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Input = {
  name: string;
  type:
    | "decimal"
    | "email"
    | "none"
    | "numeric"
    | "search"
    | "tel"
    | "text"
    | "url";
  label?: string;
  labelStyle?: TextStyle;
  value?: string;
  error?: string;
  placeholder: string;
  props?: PropsWithChildren;
  handleChange?: (e: string) => void;
};

type Props = {
  formType?: string;
  inputList: Input[];
  submitHandler?: () => void;
};

export default function Form({ formType, inputList, submitHandler }: Props) {
  const [viewPassword, setViewPassword] = useState(true);
  return (
    <View style={styles.formContainer}>
      {inputList.map((input, i) => (
        <View style={{ position: "relative" }} key={i}>
          {input.label && (
            <Text style={[{ marginBottom: 8, fontSize: 16 }, input.labelStyle]}>
              {input.label}
            </Text>
          )}
          <View>
            <TextInput
              style={[styles.formInput]}
              inputMode={input.type}
              value={input.value}
              focusable
              onChangeText={input.handleChange}
              placeholder={input.placeholder}
              secureTextEntry={viewPassword}
              cursorColor={Colors.light.primary}
              {...input.props}
            />
            <TouchableOpacity
              style={styles.passwordIcon}
              onPress={() => setViewPassword(!viewPassword)}
            >
              {input.name == "password" &&
                (viewPassword ? (
                  <Ionicons name="eye" size={24} />
                ) : (
                  <Ionicons name="eye-off" size={24} />
                ))}
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15 }}>{input.error}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 1,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: "black",
    fontSize: 16,
    borderRadius: 8,
  },
  passwordIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 12,
    top: 15,
  },
});
