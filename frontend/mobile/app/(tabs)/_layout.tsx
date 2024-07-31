import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
        tabBarStyle: { backgroundColor: Colors.primary },
        headerStyle: {
          backgroundColor: Colors.dark.background,
        },
        headerStatusBarHeight: 0,
        // headerShadowVisible: false,
        headerShown: false,
        // headerTitleStyle: {
        //   fontSize: 20,
        //   color: "black",
        //   padding: 0,
        //   margin: 0,
        // },
        // headerRight: () => (
        //   <TouchableOpacity style={{ marginRight: 20 }}>
        //     <MaterialCommunityIcons name="magnify" size={22} color="grey" />
        //   </TouchableOpacity>
        // ),
        // headerLeft: () => (
        //   <TouchableOpacity style={{ marginLeft: 20 }}>
        //     <Image
        //       source={require("../../assets/images/favicon.png")}
        //       alt="profile"
        //       style={{
        //         borderRadius: 100,
        //         width: 35,
        //         height: 35,
        //         borderWidth: 1,
        //         borderColor: "blue",
        //       }}
        //     />
        //   </TouchableOpacity>
        // ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home-sharp" : "home-outline"}
              size={20}
              color={color}
            />
          ),
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTitleStyle: {
            color: "black",
          },
          headerTitle: "Welcome, Chinyere",
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 15, marginRight: 20 }}>
              <TouchableOpacity>
                <MaterialIcons name="support-agent" size={22} />
              </TouchableOpacity>
              <TouchableOpacity>
                <TabBarIcon
                  name="notifications-outline"
                  style={{ fontWeight: "700" }}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          ),
          headerShown: true,
          headerShadowVisible: false,
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
          headerTitleStyle: {
            color: "black",
          },
          headerTitle: "Chats",
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity>
                <TabBarIcon
                  name="search"
                  style={{ fontWeight: "700" }}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          ),
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="files"
        options={{
          title: "Files",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "document" : "document-outline"}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Me",
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
