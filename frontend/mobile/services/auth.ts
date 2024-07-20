import useUserData from "@/context/signUpContext";
import api from "./api";

const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login/", { email, password });
    console.log(response.data);
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
  } finally {
  }
};

const logout = async () => {
  try {
    // await getCsrfToken();
    const response = await api.post("/auth/logout/");
    console.log(response.data);
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export { login, logout, register };
