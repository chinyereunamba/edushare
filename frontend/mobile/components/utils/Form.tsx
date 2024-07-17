import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from "react-native";
import React, { PropsWithChildren, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type inputMode =
  | "decimal"
  | "email"
  | "none"
  | "numeric"
  | "search"
  | "tel"
  | "text"
  | "url";

type Input = {
  name: string | any;
  type: inputMode | any;
  dualInput?: boolean | any;
  label?: string | any;
  labelStyle?: TextStyle;
  value?: string | any;
  error?: string | any;
  placeholder: string | any;
  style?: ViewStyle;
  props?: PropsWithChildren;
  handleChange?: (e: string) => void;
};

type Props = {
  formType?: string;
  inputList: Input[];
  submitHandler?: () => void;
};

export default function Form({ formType, inputList, submitHandler }: Props) {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <View style={styles.formContainer}>
      {inputList.map((input, i) => {
        return input.dualInput ? (
          <View key={i}>
            <View
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 15,
                },
              ]}
            >
              <TextInput
                style={[styles.formInput, input.style]}
                inputMode={input.type[0]}
                value={input.value}
                focusable
                onChangeText={input.handleChange}
                placeholder={input.placeholder[0]}
                secureTextEntry={viewPassword}
                cursorColor={Colors.light.primary}
                {...input.props}
              />
              <TextInput
                style={[styles.formInput, input.style]}
                inputMode={input.type[1]}
                value={input.value}
                focusable
                onChangeText={input.handleChange}
                placeholder={input.placeholder[1]}
                secureTextEntry={viewPassword}
                cursorColor={Colors.light.primary}
                {...input.props}
              />
            </View>
            <Text style={{ fontSize: 15 }}>{input.error}</Text>
          </View>
        ) : (
          <View style={{ position: "relative" }} key={i}>
            {input.label && (
              <Text
                style={[{ marginBottom: 8, fontSize: 16 }, input.labelStyle]}
              >
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
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 1,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "grey",
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
