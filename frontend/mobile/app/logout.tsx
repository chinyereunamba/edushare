import useUser from "@/context/userContext";
import { router } from "expo-router";
import React from "react";

export default function logout() {
  const { clearUser, user } = useUser();
  clearUser();
  
  console.log("Logged out");
  console.log(user);
  return router.replace("");
}
