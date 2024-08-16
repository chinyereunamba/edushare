import { UserProps } from "@/types";
// import EncryptedStorage from "react-native-encrypted-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_DATA_KEY = "@user_data";

// Function to save user data
export const setUserData = async (data: UserProps) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(USER_DATA_KEY, jsonValue);
  } catch (e) {
    console.error("Error storing user data:", e);
  }
};

// Function to retrieve user data
export const getUserData = async (): Promise<UserProps | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(USER_DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error retrieving user data:", e);
    return null;
  }
};

// Function to clear user data
export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem(USER_DATA_KEY);
  } catch (e) {
    console.error("Error clearing user data:", e);
  }
};

// // Function to store user data and auth tokens
// export async function storeUserSession(user: UserProps) {
//   try {
//     await EncryptedStorage.setItem(
//       "user_session",
//       JSON.stringify({
//         user: user.user, // User data object
//         token: user.accessToken, // Authentication token
//       })
//     );

//     console.log("User session stored successfully");
//   } catch (error) {
//     console.error("Failed to store user session:", error);
//   }
// }

// // Function to retrieve user data and auth tokens
// export async function retrieveUserSession() {
//   try {
//     const session = await EncryptedStorage.getItem("user_session");

//     if (session !== null) {
//       const { user, token } = JSON.parse(session);
//       console.log("User session retrieved successfully");
//       return { user, token };
//     }

//     return null;
//   } catch (error) {
//     console.error("Failed to retrieve user session:", error);
//     return null;
//   }
// }

// // Function to clear user session (logout)
// export async function clearUserSession() {
//   try {
//     await EncryptedStorage.removeItem("user_session");
//     console.log("User session cleared successfully");
//   } catch (error) {
//     console.error("Failed to clear user session:", error);
//   }
// }
