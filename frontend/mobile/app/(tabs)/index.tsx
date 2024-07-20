import { Styles } from "@/constants/Styles";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar barStyle={'default'} />
      <View style={Styles.container}>
        <View>
          <Text style={Styles.titleText}>Welcome</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
