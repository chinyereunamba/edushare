import {
  KeyboardAvoidingView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {  useState } from "react";
import { router } from "expo-router";
import { Styles } from "@/constants/Styles";
import InputField from "@/components/form/InputField";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type SettingListProps = {
  name: string;
  link: string;
  icon?: string;
  data?: string[];
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
        {
          name: "Profile Information",
          link: "/",
          icon: "person",
          data: ["Edit Profile, Change Profile Picture"],
        },
        {
          name: "Account Security",
          link: "/",
          icon: "lock",
          data: ["Change Password", "2FA"],
        },
        {
          name: "Notifications",
          link: "/",
          icon: "notifications",
          data: ["Email", "Push", "Preferences"],
        },
      ],
    },
    {
      title: "App Preferences",
      data: [
        {
          name: "Theme",
          link: "/",
          icon: "palette",
          data: ["Light", "Dark", "System Default"],
        },
        {
          name: "App Language",
          link: "/",
          icon: "language",
          data: ["Select App Language"],
        },
      ],
    },
    {
      title: "Support and Feedback",
      data: [
        {
          name: "Privacy Settings",
          link: "/",
          icon: "privacy-tip",
          data: ["Blocked Users", "Profile Visibility"],
        },
        {
          name: "Help Center",
          link: "/",
          icon: "help",
          data: ["FAQs", "Contact Support"],
        },
        {
          name: "Feedback",
          link: "/",
          icon: "feedback",
          data: ["Send Feedback", "Rate Us"],
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          name: "App Information",
          link: "/",
          icon: "info",
          data: ["Version Info", "Privacy Policy"],
        },
        {
          name: "Legal",
          link: "/",
          data: ["Licenses"],
        },
      ],
    },
    {
      title: "",
      data: [{ name: "Logout", link: "/" }],
    },
  ];
  return (
    <SectionList
      style={{
        paddingHorizontal: 20,
      }}
      showsVerticalScrollIndicator={false}
      sections={settings}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.settingsList}>
          <TouchableOpacity
            onPress={() => router.navigate(item.link)}
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            {item.icon && (
              <MaterialIcons
                name={item.icon as any}
                size={24}
                color={Colors.primary}
              />
            )}
            <View>
              <Text style={[Styles.headerText]}>{item.name}</Text>
              {item.data && <Text>{item.data.join(", ")}</Text>}
            </View>
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
  );
};

export default Settings;

const styles = StyleSheet.create({
  settingsTitle: {
    marginVertical: 5,
  },
  settingsList: {
    paddingVertical: 8,
  },
});
