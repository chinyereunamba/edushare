import useUserData from "@/context/signUpContext";
import api from "./api";
import { LecturerData, StudentData } from "@/types";
import axios from "axios";

const login = async (email: string, password: string) => {
  try {
    const response = await api.post(`http://127.0.0.1:8000/api/auth/login/`, {
      email,
      password,
    });
    // console.log(response.json());
    const { access, refresh } = response.data;
    console.log("Access: ", access, "Refresh: ", refresh);

    // const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
    //   method: "POST",
    //   body: {
    //     email: email,
    //     password: password,
    //   },
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => console.log(res));
  } catch (error) {
    console.error("Login error:", error);
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
    // await getCsrfToken();
    const response = await api.post("/auth/logout/");
    console.log(response.data);
  } catch (error) {
    console.error("Logout error:", error);
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

export { login, logout, register, fetchData };
