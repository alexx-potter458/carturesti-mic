import { setToken } from "./slice";
import axiosApi from "../../../utils/axios";

const login = (userData) => async (dispatch) => {
  try {
    const result = await axiosApi.post("/sign-in", { ...userData });

    localStorage.setItem("token", result.data);
    dispatch(setToken(result.data));
  } catch (error) {
    console.error("Login failed:", error);
  }
};

const register = (userData) => async (dispatch) => {
  try {
    const result = await axiosApi.post("/sign-up", { ...userData });

    localStorage.setItem("token", result.data);
    dispatch(setToken(result.data));
  } catch (error) {
    console.error("Login failed:", error);
  }
};

const logout = () => async (dispatch) => {
  try {
    await axiosApi.delete("/sign-out");

    localStorage.removeItem("token");
    dispatch(setToken(null));
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export default {
  login,
  register,
  logout,
};
