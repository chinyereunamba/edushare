import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";

export const Posts = () => (
  <View style={styles.tab}>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
      porro, eveniet dolor eligendi corporis pariatur, vitae et sequi doloremque
      sint quibusdam distinctio ipsum aperiam sit soluta nesciunt! Facilis,
      dignissimos numquam. Iure ipsam voluptates maxime quia deleniti quam.
      Deserunt rem error ipsam, porro nihil nobis molestias necessitatibus nisi
      tempora, maiores doloribus labore numquam fugiat laboriosam sint saepe
      consequatur distinctio nulla a et. Reprehenderit a eligendi cum iure,
      nesciunt repudiandae? Incidunt doloremque cum magnam ea, sit sequi aut
      fugit vel impedit explicabo error minus, nihil eos blanditiis enim ipsa?
      Rerum aspernatur quidem dolor iste voluptatem blanditiis accusamus esse at
      maxime eius?
    </Text>
  </View>
);

export const Groups = () => (
  <View style={styles.tab}>
    <Text>There</Text>
  </View>
);

export const SecondRoute = () => (
  <View style={styles.tab}>
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
      style={[styles.tabBar, { backgroundColor: "transparent", flex: 1 }]}
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
  tab: {
    minHeight: 100,
    paddingVertical: 10,
    backgroundColor: "transparent",
    flex: 1,
  },
});
