import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { Styles } from "@/constants/Styles";
import React from "react";
import StudySpace from "./StudySpace";

export default function StudyGroups() {
  const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

  const list = [
    { index: 1, title: "Diplome in Opertions nd supply" },
    { index: 2, title: "Diplome in Opertions nd supply" },
    { index: 3, title: "Lorem in Opertions nd supply" },
    { index: 4, title: "Ipsum in Opertions nd supply" },
  ];
  return (
    <View>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          },
        ]}
      >
        <Text style={Styles.subHeaderText}>Your study spaces</Text>
        <Text style={Styles.textSize}>View All</Text>
      </View>
      <View>
        <FlatList
          data={list}
          contentContainerStyle={{ flexDirection: "row", gap: 20 }}
          renderItem={({ item }) => <StudySpace title={item.title} />}
          horizontal
          snapToEnd
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          showsHorizontalScrollIndicator={false}
          snapToStart
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
