import {
  Modal,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function CGPA() {
  const grades = ["A", "B", "C", "D", "E", "F"];
  const [showPicker, setShowPicker] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>();
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.pickerContainer}>
          <FlatList
            data={grades}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  setSelectedLevel(item);
                  setShowPicker(false);
                }}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 0.1,
  },
  pickerContainer: {
    backgroundColor: "white",
    margin: 20,
    shadowColor: "grey",
    borderColor: "grey",
    borderWidth: 0.3,
  },
  option: {
    padding: 15,
  },
  optionText: {
    fontSize: 18,
  },
});
