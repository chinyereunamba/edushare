import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import useUser from "@/context/userContext";
import LoadingScreen from "@/app/loading";

SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const router = useRouter();
//   const { user, loadUser } = useUser();

//   const [fontsLoaded] = useFonts({
//     SpaceMono: require("../assets/fonts/Aeonik-Regular.ttf"),
//   });

//   const [initialized, setInitialized] = useState(false);

//   useEffect(() => {
//     const initializeApp = async () => {
//       await loadUser(); // Load user data from AsyncStorage
//       setInitialized(true); // Indicate that initialization is complete
//       SplashScreen.hideAsync();

//       // if (user && user.accessToken) {
//       //   router.replace("(tabs)"); // User is authenticated, navigate to tabs
//       // } else {
//       //   router.replace("index"); // User is not authenticated
//       // }
//     };

//     if (fontsLoaded) {
//       initializeApp();
//     }
//   }, [fontsLoaded, user, loadUser, router]);

//   if (!fontsLoaded || !initialized) {
//     return null;
//   }
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <GestureHandlerRootView>
//         <ThemeProvider
//           value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
//         >
//           <StatusBar
//             barStyle={colorScheme === "dark" ? "light-content" : "default"}
//             backgroundColor={Colors.primary}
//           />
//           <Stack screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//             <Stack.Screen
//               name="(screens)"
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <Stack.Screen name="+not-found" />
//             <Stack.Screen name="+not-found" />
//             <Stack.Screen name="index" options={{ headerShown: false }} />
//             <Stack.Screen name="(auth)" options={{ headerShown: false }} />s
//           </Stack>
//         </ThemeProvider>
//       </GestureHandlerRootView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// })


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/Aeonik-Regular.ttf"),
  });

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setInitialized(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !initialized) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <StatusBar
            barStyle={colorScheme === "dark" ? "light-content" : "default"}
            backgroundColor={Colors.primary}
          />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="loading" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(screens)" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
