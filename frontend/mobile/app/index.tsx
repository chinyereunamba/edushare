import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/utils/Button";
import { Styles } from "@/constants/Styles";
import GoogleIcon from "@/components/utils/icon";
import { useEffect } from "react";

export default function HomeScreen() {
  const router = useRouter();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/(auth)/sign-up");
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [router]);
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
        <Text style={[Styles.positionCenter, styles.dividerText]}>OR</Text>
        <View
          style={[
            {
              alignContent: "stretch",
              borderWidth: 1,
              borderColor: "black",
              justifyContent: "center",
            },
          ]}
        >
          <Link href={"/profileForm"}>
            <GoogleIcon />
            <Text>Continue with Google</Text>
          </Link>
        </View>
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
