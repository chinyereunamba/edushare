import useUser from "@/context/userContext";
import { router } from "expo-router";
import React, { useState } from "react";

export default function logout() {
  const [loggedOut, setLoggedOut] = useState(false);
  const { clearUser, user } = useUser();

  if (loggedOut == false) {
    clearUser();
    console.log("Logged out");
    console.log(user);
    setLoggedOut(true);
    return router.push('/')
  }
}
