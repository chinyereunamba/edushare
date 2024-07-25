import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "@/constants/Styles";

export default function Chats() {
  const chat = [
    { id: 1, name: "Chinyere" },
    { id: 2, name: "Chinyere" },
    { id: 3, name: "Chinyere" },
    { id: 4, name: "Chinyere" },
    { id: 5, name: "Chinyere" },
  ];
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.titleText}></Text>
        <FlatList
          data={chat}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
