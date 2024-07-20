import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Styles } from "@/constants/Styles";

export default function Profile() {
  return (
    <ScrollView>
      <View style={Styles.container}>

      <Text style={Styles.titleText}>Profile</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
