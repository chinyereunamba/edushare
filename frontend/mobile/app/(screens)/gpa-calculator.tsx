import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "@/constants/Styles";
import InputField from "@/components/form/InputField";
import CGPA from "@/components/home/cgpa";

export default function GPA() {
  return (
    <View style={[Styles.container]}>
      <Text
        style={[
          {
            fontSize: 44,
            fontWeight: "600",
            alignSelf: "center",
          },
        ]}
      >
        0.00
      </Text>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          {/* <InputField
            inputMode="text"
            handleChange={() => {}}
            keyboardType="default"
            maxLength={82}
            value=""
            placeholder=""
          />
          <InputField
            inputMode="text"
            handleChange={() => {}}
            keyboardType="default"
            maxLength={82}
            value=""
            placeholder=""
          />
          <InputField
            inputMode="text"
            handleChange={() => {}}
            keyboardType="default"
            maxLength={82}
            value=""
            placeholder=""
          /> */}
          {/* <CGPA /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
