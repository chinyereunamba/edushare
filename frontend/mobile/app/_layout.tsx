import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRouter, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const [initialized] = useState(true);
  const [authenticated] = useState(true);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/Aeonik-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded && initialized) {
      SplashScreen.hideAsync();
      if (authenticated) {
        return router.push("(tabs)/profile");
      }
    }
  }, [loaded, initialized]);

  if (!loaded || !initialized) {
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
            {/* {authenticated == true ? (
            <> */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="(screens)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="+not-found" />
            {/* </>
          ) : (
            <> */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            {/* </>
          )} */}
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
