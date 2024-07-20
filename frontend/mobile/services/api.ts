import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true, 
});

const getCsrfToken = async () => {
  try {
    const response = await api.get("/api/auth/csrf/");
    const csrfToken = response.data.csrfToken;
    api.defaults.headers.common["X-CSRFToken"] = csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
  }
};

export { getCsrfToken };

export default api