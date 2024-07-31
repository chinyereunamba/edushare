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
      <View
        style={{
          flexDirection: "row-reverse",
          gap: 15,
        }}
      >
        <View
          style={{
            width: "85%",
          }}
        >
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
          <Text style={[Styles.textSize, { textAlign: "left" }]}>
            {postText}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={[{ fontSize: 17 }]}>{upVoteNumber}</Text>
          <TouchableOpacity onPress={upVotePost}>
            <Ionicons
              name="caret-up-outline"
              size={24}
              color={upVote ? "blue" : "grey"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={downVotePost}>
            <Ionicons
              name="caret-down-outline"
              size={24}
              color={downVote ? "blue" : "grey"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={{
        gap: 10, flexDirection: "row", 
      }}>
        <TouchableOpacity>
          <Ionicons name="share-social" size={22} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbox-outline" size={22} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
