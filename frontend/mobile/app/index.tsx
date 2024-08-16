import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/form/Button";
import GoogleIcon from "@/components/form/icon";
import { Styles } from "@/constants/Styles";
import { useEffect } from "react";
import useUser from "@/context/userContext";

export default function HomeScreen() {
  const router = useRouter();
  const { user, loadUser } = useUser();

  useEffect(() => {
    console.log(user);
    if (user !== null) {
      loadUser();
      router.replace('(tabs)/')
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.light.primary} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/illustration.png")}
          alt="Splash Screen"
        />
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            paddingVertical: 10,
            marginTop: 25,
          }}
        >
          Get access to study materials on all courses
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Get started"
          fnc={() => {
            router.push("/login");
          }}
          color={Colors.light.background}
          bg={Colors.light.primary}
        />
        <Text
          style={[
            Styles.textSize,
            Styles.accentText,
            { textAlign: "center", marginVertical: 10 },
          ]}
        >
          Or sign in with
        </Text>
        <TouchableOpacity style={[{ alignContent: "stretch" }]}>
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              borderColor: "#ddd",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <GoogleIcon />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 17,
                textAlign: "center",
              }}
            >
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    padding: 20,
  },
  dividerText: {
    textAlign: "center",
    fontSize: 13,
    color: "grey",
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
