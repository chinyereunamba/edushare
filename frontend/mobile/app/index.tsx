import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/utils/Button";
import SimpleLineIcons from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.light.primary} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/illustration.png")}
          alt="Splash Screen"
        />
        <Text
          style={{ fontSize: 17, textAlign: "center", paddingVertical: 10 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sunt?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Login"
          fnc={() => {
            router.push("/login");
          }}
          color={Colors.light.background}
          bg={Colors.light.primary}
        />
        <CustomButton
          title="Register"
          fnc={() => {
            router.push("/sign-up");
          }}
          color={Colors.light.background}
          bg={Colors.light.primary}
        />
        <View style={styles.divider}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "grey",
            }}
          >
            OR
          </Text>
        </View>
        <CustomButton
          title="Continue with Google"
          fnc={() => {
            router.push("/sign-up");
          }}
          color={Colors.light.text}
          bg={Colors.light.background}
          icon={<SimpleLineIcons name="google" size={24} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white",
    padding: 20,
  },
  divider: {
    paddingVertical: 2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
});
