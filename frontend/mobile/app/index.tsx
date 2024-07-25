import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/form/Button";


export default function HomeScreen() {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(async () => {
  //     router.push("/sign-up");
  //     // await fetchData();
  //   }, 1000);

  // return () => clearTimeout(timer);
  // }, []);

  
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
