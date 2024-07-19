import ProgressBar from "@/components/utils/ProgressBar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import InputField from "@/components/utils/InputField";
import CustomButton from "@/components/utils/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Styles } from "@/constants/Styles";
import { useRouter } from "expo-router";

type mode = "date" | "countdown" | "datetime" | "time";

const StepThree = () => {
  const router = useRouter();

  const [selectedLevel, setSelectedLevel] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  //   console.log(selectedLevel);

  const levels = [
    { label: "100 Level", value: "100 Level" },
    { label: "200 Level", value: "200 Level" },
    { label: "300 Level", value: "300 Level" },
    { label: "400 Level", value: "400 Level" },
    { label: "500 Level", value: "500 Level" },
    { label: "600 Level", value: "600 Level" },
  ];

  const [date, setDate] = useState(null);
  const [mode, setMode] = useState<mode>("date");
  const [showDob, setShowDob] = useState(false);
  const [datePlaceholder, setDatePlaceholder] = useState("Date of birth");

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDob(Platform.OS === "ios");
    setDate(currentDate);
    setDatePlaceholder(
      currentDate ? currentDate.toDateString() : "Date of birth"
    );
  };

  const showMode = (currentMode: mode) => {
    setShowDob(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <ProgressBar step={3} totalSteps={3} />
      <View style={styles.slideContent}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 90,
              height: 90,
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 100,
            }}
          ></TouchableOpacity>
        </View>
        <View style={[{ gap: 18 }]}>
          <InputField
            inputMode="text"
            keyboardType="default"
            maxLength={80}
            placeholder="First Name"
            secureEntry={false}
          />
          <InputField
            inputMode="text"
            keyboardType="default"
            maxLength={80}
            placeholder="Last Name"
            secureEntry={false}
          />
          <View
            style={{
              flexDirection: "row",
              gap: 18,
            }}
          >
            <View style={styles.picker}>
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <Text
                  style={[
                    styles.pickerText,
                    !selectedLevel && styles.placeholder,
                  ]}
                >
                  {selectedLevel || "Academic level"}
                </Text>
              </TouchableOpacity>

              {showPicker && (
                <Modal transparent={true} animationType="slide">
                  <View style={styles.modalContainer}>
                    <View style={styles.pickerContainer}>
                      <FlatList
                        data={levels}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            style={styles.option}
                            onPress={() => {
                              setSelectedLevel(item.value);
                              setShowPicker(false);
                            }}
                          >
                            <Text style={styles.optionText}>{item.label}</Text>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  </View>
                </Modal>
              )}
            </View>
            <View style={styles.picker}>
              <TouchableOpacity onPress={() => showMode("date")}>
                <Text
                  style={[Styles.textSize, date == null && styles.placeholder]}
                >
                  {datePlaceholder}
                </Text>
              </TouchableOpacity>
              {showDob && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date || new Date()}
                  mode={mode}
                  display="default"
                  onChange={onChange}
                  minimumDate={new Date(1900, 0, 1)}
                  maximumDate={new Date()}
                />
              )}
            </View>
          </View>
          <InputField
            inputMode="text"
            keyboardType="default"
            maxLength={80}
            placeholder="Institution of learning"
            secureEntry={false}
          />
          <InputField
            inputMode="text"
            keyboardType="default"
            maxLength={80}
            placeholder="Faculty"
            secureEntry={false}
          />
          <InputField
            inputMode="text"
            keyboardType="default"
            maxLength={80}
            placeholder="Department"
            secureEntry={false}
          />
        </View>
        <CustomButton
          title="Complete"
          fnc={() => {
            router.push("(tabs)");
          }}
        />
      </View>
    </View>
  );
};

export default StepThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  slideContent: {
    flex: 1,
    marginTop: 10,
    gap: 30,
  },

  picker: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
  },
  placeholder: {
    color: "#666",
  },
  pickerButton: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ccc",
    alignItems: "center",
  },
  pickerText: {
    fontSize: 16,
    color: "#000",
  },
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
