import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Styles } from "@/constants/Styles";
import { Link } from "expo-router";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

type PostProps = {
  name: string;
  level?: string;
  profile?: string;
  postText: string;
  img?: string;
};

export { type PostProps };

export default function Post({
  name,
  level,
  profile,
  postText,
  img,
}: PostProps) {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [upVoteNumber, setUpVoteNumber] = useState(0);

  const upVotePost = () => {
    if (downVote) {
      setDownVote(false);
    }
    setUpVote(!upVote);
    !upVote
      ? setUpVoteNumber((prev) => prev + 1)
      : setUpVoteNumber((prev) => prev - 1);
  };

  const downVotePost = () => {
    if (upVote) {
      setUpVote(false);
    }
    setDownVote(!downVote);
    !downVote
      ? setUpVoteNumber((prev) => prev - 1)
      : setUpVoteNumber((prev) => prev + 1);
  };

  return (
    <View
      style={[
        {
          backgroundColor: "#f5f5f5",
          padding: 12,
          gap: 15,
          borderRadius: 10,
          marginVertical: 10,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Image
            source={require("@/assets/images/profile-img.png")}
            width={30}
            height={30}
            style={{
              overflow: "hidden",
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              gap: 1,
            }}
          >
            <Link href={""}>
              <Text style={[Styles.textSize, { fontWeight: "500" }]}>
                {name}
              </Text>
            </Link>
            <Text
              style={[
                Styles.accentText,
                {
                  fontSize: 13,
                  fontWeight: "600",
                },
              ]}
            >
              {level}
            </Text>
          </View>
        </View>
        <MaterialIcons name="more-vert" size={22} />
      </View>
      <View>
        <View>
          {img && (
            <Image
              source={require("@/assets/images/react-logo.png")}
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
              }}
            />
          )}
        </View>
        <Text style={[Styles.textSize]}>{postText}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={upVotePost}
          style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        >
          <Text style={[Styles.textSize]}>{upVoteNumber}</Text>
          <Ionicons
            name="caret-up-outline"
            size={24}
            color={upVote ? "blue" : "grey"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={downVotePost}
          style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        >
          <Ionicons
            name="caret-down-outline"
            size={24}
            color={downVote ? "blue" : "grey"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBookmark(!bookmark)}
          style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        >
          <Text style={[Styles.textSize]}>0</Text>
          {!bookmark ? (
            <Ionicons name="bookmark-outline" size={22} color={"grey"} />
          ) : (
            <Ionicons name="bookmark" size={22} color={"blue"} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
