import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";

export const Posts = () => (
  <View style={{ paddingVertical: 10, backgroundColor: "transparent" }}>
    <Text>Hello</Text>
  </View>
);

export const Groups = () => (
  <View style={{ paddingVertical: 10, backgroundColor: "transparent" }}>
    <Text>There</Text>
  </View>
);

export const SecondRoute = () => (
  <View style={{ paddingVertical: 10, backgroundColor: "transparent" }}>
    <Text>There</Text>
  </View>
);

// Inside renderTabBar

export default function ProfileTabs() {
  const renderScene = SceneMap({
    posts: Posts,
    groups: Groups,
    books: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "posts", title: "Posts" },
    { key: "groups", title: "Groups" },
    { key: "books", title: "Books" },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.primary }}
      style={[styles.tabBar, { backgroundColor: "transparent" }]}
      labelStyle={{ color: "white", fontWeight: "bold" }}
      renderLabel={({ route, focused, color }) => (
        <Text style={[Styles.textSize, { color: focused ? "black" : "black" }]}>
          {route.title}
        </Text>
      )}
      tabStyle={{ opacity: 1 }}
      pressColor="transparent"
    />
  );

  return (
    <TabView
      style={{
        marginVertical: 10,
      }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#3f51b5",
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    shadowOffset: { height: 0, width: 0 }, // Remove shadow on iOS
    shadowRadius: 0, // Remove shadow on iOS
  },
});
