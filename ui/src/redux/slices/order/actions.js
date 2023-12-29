import { setOrderList } from "./slice";
import { showNotification } from "../toast/slice";
import axiosApi from "../../../utils/axios";

const fetchOrders = () => async (dispatch) => {
  try {
    const result = await axiosApi.get("/orders");
    dispatch(setOrderList(result.data));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data.message,
        type: "error",
      })
    );
  }
};

const cancelOrder = (id) => async (dispatch) => {
  try {
    await axiosApi.patch(`/orders/status/${id}`, {
      status: "Cancelled",
    });
    dispatch(fetchOrders());
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
  fetchOrders,
  cancelOrder,
};
