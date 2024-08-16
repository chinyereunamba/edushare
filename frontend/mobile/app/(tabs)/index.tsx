import Carousel from "@/components/home/IntroCard";
import { IntroCard } from "@/components/home/IntroCard";
import Post, { PostProps } from "@/components/home/Post";
import { Colors, newColors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";
import useUser from "@/context/userContext";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

type sectionProps = {
  id: number;
  name: string;
  to: string;
  icon?: string;
  color?: string;
};
export default function HomeScreen() {
  const { user, loadUser } = useUser();
  useEffect(() => {
    loadUser();
  }, []);

  const sectionList: sectionProps[] = [
    {
      id: 1,
      name: "Forum",
      to: "",
      icon: "forum",
      color: newColors.crayola["600"],
    },
    {
      id: 2,
      name: "GPA",
      to: "(screens)/gpa-calculator",
      icon: "calculate",
      color: newColors.viridian["600"],
    },
    {
      id: 3,
      name: "People",
      to: "",
      icon: "workspaces",
      color: newColors.iris["600"],
    },
    {
      id: 4,
      name: "Others",
      to: "",
      icon: "more-horiz",
      color: newColors.raisin_black["300"],
    },
  ];

  const posts: PostProps[] = [
    {
      name: "Chinyere Unamba",
      postText:
        "This is the first post on this app that is actually readable. If you can read this, upvote.",
      level: "400 Level",
    },
    {
      name: "Kingston Great",
      postText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dignissimos porro cumque quod animi ullam.",
      level: "Lecturer",
    },
    {
      name: "Jericho Israel",
      postText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dignissimos porro cumque quod animi ullam.",
      level: "100 Level",
    },
  ];

  const intro = [
    { name: "Study Space", bg: newColors.crayola["800"] },
    { name: "Buy Books", bg: newColors.iris["800"] },
    { name: "Ask your peers", bg: newColors.viridian["800"] },
    { name: "Answer your peers", bg: newColors.french_gray["800"] },
  ];

  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.primary} />
      <View style={Styles.container}>
        <Carousel intro={intro} />
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            backgroundColor: "#F5F5F5",
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
            marginVertical: 20,
          }}
        >
          {sectionList.map((item, id) => (
            <View key={item.id} style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  console.log(user);
                }}
              >
                <MaterialIcons
                  name={item.icon as any}
                  size={20}
                  style={{
                    padding: 10,
                    borderRadius: 100,
                    backgroundColor: "#E9EBED",
                    color: item.color,
                    marginBottom: 5,
                  }}
                />
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={[Styles.headerText]}>Posts</Text>
          {posts.map((item) => (
            <Post
              key={item.name}
              name={item.name}
              level={item.level}
              postText={item.postText}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
