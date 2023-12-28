import { setToken, setUser } from "./slice";
import { showNotification } from "../toast/slice";
import axiosApi from "../../../utils/axios";

const login = (userData) => async (dispatch) => {
  try {
    const result = await axiosApi.post("/sign-in", { ...userData });

    localStorage.setItem("token", result.data);
    dispatch(setToken(result.data));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data.message,
        type: "error",
      })
    );
  }
};

const register = (userData) => async (dispatch) => {
  try {
    const result = await axiosApi.post("/sign-up", { ...userData });

    localStorage.setItem("token", result.data);
    dispatch(setToken(result.data));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data.message,
        type: "error",
      })
    );
  }
};

const logout = () => async (dispatch) => {
  try {
    await axiosApi.delete("/sign-out");

    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data.message,
        type: "error",
      })
    );
  }
};

const getConnectedUser = () => async (dispatch) => {
  try {
    const result = await axiosApi.get("/users/connected");
    dispatch(setUser(result.data));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data.message,
        type: "error",
      })
    );
  }
};

export default {
  login,
  register,
  logout,
  getConnectedUser,
};
