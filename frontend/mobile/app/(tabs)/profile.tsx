import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "@/constants/Styles";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@/components/form/Button";
import ProfileTabs from "../(screens)/profile-tab";

export default function Profile() {
  
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View>
          <TouchableOpacity
            style={{
              position: "relative",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("@/assets/images/profile-img.png")}
              height={80}
              width={80}
              alt="profile-img"
              style={{
                height: 120,
                width: 120,
                borderRadius: 100,
                alignSelf: "center",
              }}
            />
            <View
              style={{
                position: "absolute",
                right: 5,
                bottom: 5,
                width: 35,
                height: 35,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: "lightgrey",
                backgroundColor: "white",
              }}
            >
              <MaterialIcons
                name="edit"
                size={22}
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  verticalAlign: "middle",
                  alignItems: "center",
                  top: "50%",
                  transform: [{ translateY: -10 }],
                }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              alignSelf: "center",
              marginVertical: 15,
            }}
          >
            <Text style={[Styles.subHeaderText, { textAlign: "center" }]}>
              Design Team
            </Text>
            <Text
              style={[
                Styles.accentText,
                Styles.smallText,
                { textAlign: "center", paddingVertical: 5, fontWeight: "600" },
              ]}
            >
              @designteam
            </Text>
          </View>
          <View>
            <Text style={[Styles.textSize]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              odit.
            </Text>
            <View
              style={{
                marginVertical: 10,
                gap: 8,
              }}
            >
              <View
                style={[
                  {
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                  },
                ]}
              >
                <MaterialIcons name="school" size={20} />
                <Text style={[Styles.textSize]}>
                  Studies at University of Port Harcourt
                </Text>
              </View>
              <View
                style={[
                  {
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  },
                ]}
              >
                <MaterialIcons name="auto-graph" size={20} />
                <Text style={[Styles.textSize]}>
                  400 Level, Medicine and Surgery
                </Text>
              </View>
              <View
                style={[
                  {
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  },
                ]}
              >
                <MaterialIcons name="location-pin" size={20} />
                <Text style={[Styles.textSize]}>Port Harcourt, Nigeria</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginVertical: 10,
            }}
          >
            <Text style={[Styles.textSize]}>
              <Text style={{ fontWeight: "600" }}>351</Text> Followers
            </Text>
            <Text style={[Styles.textSize]}>
              <Text style={{ fontWeight: "600" }}>351</Text> Following
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <CustomButton title="Follow" style={{ flex: 1 }} fnc={() => {}} />
            <CustomButton title="Message" style={{ flex: 1 }} fnc={() => {}} />
          </View>
        </View>
        <ProfileTabs />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
