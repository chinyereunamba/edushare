import {
  KeyboardAvoidingView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { Styles } from "@/constants/Styles";
import InputField from "@/components/form/InputField";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type SettingListProps = {
  name: string;
  link: string;
  icon?: string;
};

type SettingsProps = {
  title: string;
  data: SettingListProps[];
};

const Settings = () => {
  const [searchInput, setSearchInput] = useState("");
  const settings: SettingsProps[] = [
    {
      title: "Account Settings",
      data: [
        { name: "Profile Information", link: "/", icon: "person" },
        { name: "Account Security", link: "/", icon: "lock" },
        { name: "Notifications", link: "/", icon: "notifications" },
      ],
    },
    {
      title: "App Preferences",
      data: [
        { name: "Theme", link: "/", icon: "palette" },
        { name: "Language", link: "/", icon: "language" },
      ],
    },
    {
      title: "Support and Feedback",
      data: [
        { name: "Privacy Settings", link: "/", icon: "privacy-tip" },
        { name: "Help Center", link: "/", icon: "help" },
        { name: "Feedback", link: "/", icon: "feedback" },
      ],
    },
    {
      title: "About",
      data: [
        { name: "App Information", link: "/", icon: "info" },
        { name: "Legal", link: "/" },
      ],
    },
    {
      title: "",
      data: [{ name: "Logout", link: "/" }],
    },
  ];
  return (
    <ScrollView>
      <View
        style={[
          Styles.container,
          {
            paddingVertical: 20,
          },
        ]}
      >
        <KeyboardAvoidingView>
          <View>
            <InputField
              inputMode="search"
              handleChange={(e) => setSearchInput(e)}
              keyboardType="default"
              placeholder="Search settings"
              maxLength={255}
              value={searchInput}
              customStyles={{
                borderRadius: 15,
              }}
            />
          </View>
        </KeyboardAvoidingView>

        <SectionList
          style={{
            marginTop: 15,
          }}
          sections={settings}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.settingsList}>
              <TouchableOpacity
                onPress={() => router.navigate(item.link)}
                style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
              >
                {item.icon && (
                  <MaterialIcons
                    name={item.icon as any}
                    size={24}
                    color={Colors.primary}
                  />
                )}
                <Text style={[Styles.textSize]}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.settingsTitle}>
              <Text
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {title}
              </Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settingsTitle: {
    marginVertical: 8,
  },
  settingsList: {
    paddingVertical: 10,
  },
});
