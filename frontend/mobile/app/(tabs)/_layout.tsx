import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Colors.primary },
        headerStyle: {
          backgroundColor: Colors.dark.background,
        },
        headerStatusBarHeight:0,
        // headerShadowVisible: false,
        headerShown: true,
        headerTitleStyle: {
          fontSize: 20,
          color: "black",
          padding: 0,
          margin: 0,
        },
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 20 }}>
            <MaterialCommunityIcons name="magnify" size={22} color="grey" />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image
              source={require("../../assets/images/favicon.png")}
              alt="profile"
              style={{
                borderRadius: 100,
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "blue",
              }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
