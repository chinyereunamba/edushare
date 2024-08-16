import useUserData from "@/context/signUpContext";
import api from "./api";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

async function loginWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const idToken = userInfo.idToken;

    // Send idToken to your Django backend
    const response = await fetch(
      "http://edushare.koyeb.app/api/auth/google/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: idToken }),
      }
    );

    const data = await response.json();
    // Handle response, store auth token, etc.
  } catch (error) {
    console.error(error);
  }
}


const login = async (email: string, password: string) => {
  try {
    await api({
      url: "/api/auth/login/",
      data: JSON.stringify({
        email: email,
        username: email,
        password: password,
      }),
      method: "POST",
    }).then((res) => {
      return res;
    });
  } catch (e) {
    console.info("login", e);
  } finally {
    console.log("Sent");
  }
};

const register = async () => {
  const { email, password } = useUserData((state) => {
    return { email: state.email, password: state.password };
  });

  try {
    const response = await api.post("/auth/register", {
      email: email,
      password1: password,
      password2: password,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Sign up error:", error);
  }
};

// const createProfile = async () => {
//   const { profile, userType } = useUserData((state) => {
//     return { profile: state.profile, userType: state.userType };
//   });

//   if (userType == "Lecturer") {
//     const data: LecturerData = {
//       institution: profile.institution,
//       department: profile.department,
//       faculty: profile.faculty,
//       areaSpecialized: profile.areaSpecialized,
//       user: 3,
//     };
//   } else if (userType == "Student") {
//     const data: StudentData = {
//       institution: profile.institution,
//       department: profile.department,
//       faculty: profile.faculty,
//       level: profile.level,
//       user: 2,
//     };

//     const response = await api.post("/auth/students/", data);
//   }
// };

const logout = async () => {
  try {
    await api({
      url: "/api/auth/login/",
      data: JSON.stringify({
        email: "admin@mail.com",
        password: "user1234",
      }),
      method: "POST",
    }).then((res) => {
      console.log(res.status);
      console.log(res.data);
      console.log(res.statusText);
      console.log(res.headers);
      console.log(res.config);
    });
  } catch (e) {
    console.info("login", e);
  } finally {
    console.log("Sent");
  }
};

const fetchData = async () => {
  const response = await fetch("http://localhost:8000/api/auth/users/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res.statusText)
    .then((d) => console.log(d));

  // console.log(response.json());
  // return response.json();
};




const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    // Send userInfo.idToken to Django for verification
  } catch (error:any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the sign-in flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g., sign-in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error
    }
  }
};


export { login, logout, register, fetchData, loginWithGoogle };
