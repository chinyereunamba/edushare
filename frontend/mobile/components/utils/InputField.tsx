import { StyleSheet, Text, View, TextInput, TextStyle } from "react-native";
import React from "react";

type inputMode =
  | "decimal"
  | "email"
  | "none"
  | "numeric"
  | "search"
  | "tel"
  | "text"
  | "url";
type keyboardType =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url"
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "name-phone-pad"
  | "twitter"
  | "web-search";

type Props = {
  keyboardType: keyboardType;
  placeholder: string;
  maxLength: number;
  secureEntry?: boolean;
  customStyles?: TextStyle;
  inputMode: inputMode;
  label?: string;
};
export { type inputMode, type keyboardType, type Props };

export default function InputField({
  keyboardType,
  secureEntry,
  placeholder,
  maxLength,
  customStyles,
  inputMode,
  label,
}: Props) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        keyboardType={keyboardType}
        secureTextEntry={secureEntry}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        style={[styles.formInput, customStyles]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formInput: {
    borderWidth: 1,
    borderColor: "grey",
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: "black",
    fontSize: 16,
    borderRadius: 8,
    alignItems: "stretch",
  },
  label: {
    paddingVertical: 5,
    fontSize: 15,
  },
});
