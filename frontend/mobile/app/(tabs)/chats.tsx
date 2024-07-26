import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Styles } from "@/constants/Styles";
import ChatThumbnail from "@/components/chat/chatThumbnail";
import { Colors, newColors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Chats() {
  const chat = [
    { id: 1, name: "Chinyere" },
    { id: 2, name: "Chinyere" },
    { id: 3, name: "Chinyere" },
    { id: 4, name: "Chinyere" },
    { id: 5, name: "Chinyere" },
  ];
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View>
          <Text style={[Styles.headerText, { marginBottom: 10 }]}>
            Friend requests
          </Text>
          <View
            style={{
              gap: 15,
            }}
          >
            {chat.map((item, id) => (
              <View
                key={item.id}
                style={{
                  gap: 8,
                  padding: 12,
                  backgroundColor: newColors.french_gray["900"],
                  borderRadius: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View>
                    <Image
                      source={require("@/assets/images/profile-img.png")}
                      width={35}
                      height={35}
                      style={{
                        borderRadius: 100,
                        objectFit: "cover",
                        aspectRatio: 1,
                        width: 35,
                        height: 35,
                      }}
                    />
                  </View>
                  <Text style={[Styles.textSize]}>{item.name}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => chat.pop()}>
                    <MaterialIcons name="check" size={22} color="green" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons name="close" size={22} color="#DC3545" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={[Styles.subContainer]}>
          <Text style={[Styles.headerText, { marginBottom: 10 }]}>
            Messages
          </Text>
          <ChatThumbnail />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
