import Post, { PostProps } from "@/components/home/Post";
import { Colors, newColors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";
import { MaterialIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";

type sectionProps = {
  id: number;
  name: string;
  to: string;
  icon?: string;
  color?: string;
};
export default function HomeScreen() {
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
      name: "Task",
      to: "",
      icon: "task-alt",
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
        "Lorem ipsum dolor sit amet\
       consectetur, adipisicing elit. Provident \
       dignissimos porro cumque quod animi\
        ullam.",
      level: "400 Level",
    },
    {
      name: "Kingston Great",
      postText:
        "Lorem ipsum dolor sit amet\
       consectetur, adipisicing elit. Provident \
       dignissimos porro cumque quod animi\
        ullam.",
      level: "300 Level",
    },
    {
      name: "Jericho Israel",
      postText:
        "Lorem ipsum dolor sit amet\
       consectetur, adipisicing elit. Provident \
       dignissimos porro cumque quod animi\
        ullam.",
      level: "100 Level",
    },
  ];
  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.primary} />
      <View style={Styles.container}>
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
              <TouchableOpacity>
                <MaterialIcons
                  name={item.icon}
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
          <FlatList
            data={posts}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Post
                name={item.name}
                level={item.level}
                postText={item.postText}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
