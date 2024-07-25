import StudySpace from "@/components/home/StudySpace";
import { Styles } from "@/constants/Styles";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

export default function HomeScreen() {
  const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

  const list = [
    { index: 1, title: "Diplome in Opertions nd supply" },
    { index: 2, title: "Diplome in Opertions nd supply" },
    { index: 3, title: "Lorem in Opertions nd supply" },
    { index: 4, title: "Ipsum in Opertions nd supply" },
  ];
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View
          style={[
            
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom:10
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
                itemVisiblePercentThreshold:70
              }}
            showsHorizontalScrollIndicator={false}
            snapToStart
            />
        </View>
        <View style={[Styles.subContainer]}>
          <Text style={[Styles.subHeaderText]}>Find </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
