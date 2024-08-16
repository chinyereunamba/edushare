import React, { useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useUser from "@/context/userContext";

const LoadingScreen = () => {
  const router = useRouter();
  const { user, loadUser } = useUser();

  useEffect(() => {
    const checkAuth = async () => {
      await loadUser();
      if (user && user.accessToken) {
        router.replace("(tabs)"); // User is authenticated, navigate to tabs
      } else {
        router.replace("index"); // User is not authenticated
      }
    };

    checkAuth();
  }, [user, loadUser, router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
