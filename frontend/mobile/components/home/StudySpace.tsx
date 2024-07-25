import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Styles } from "@/constants/Styles";

type Props = {
  title: string;
};

export default function StudySpace({ title }: Props) {
  const width =
    Dimensions.get("window").width - 100 > 400
      ? 400
      : Dimensions.get("window").width - 100;
  return (
    <View
      style={{
        borderColor: "#f5f5f5",
        borderWidth: 1,
        width: width,
        borderRadius: 10,
        height: 400,
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("../../assets/images/illustration.png")}
        width={width}
        height={100}
      />
      <View
        style={{
          position: "absolute",
          right: 0,
          top: 15,
          paddingHorizontal: 15,
          paddingVertical: 7,
          backgroundColor: "red",
          shadowColor: "grey",
          shadowOpacity: 0.5,
          borderRadius: 3,
        }}
      >
        <Text style={{ color: "white" }}>Diploma</Text>
      </View>
      <View
        style={{
          padding: 15,
        }}
      >
        <Text style={Styles.headerText}>{title}</Text>
        <Text
          style={[Styles.textSize, Styles.accentText, { paddingVertical: 5 }]}
        >
          {title}
        </Text>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "red",
            padding: 10,
            borderRadius: 8,
            marginVertical: 5,
          }}
        >
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
