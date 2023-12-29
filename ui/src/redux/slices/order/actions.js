import { setOrderList } from "./slice";
import { showNotification } from "../toast/slice";
import { checkoutCart } from "../cart/slice";
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
    dispatch(
      showNotification({
        message: "Comandă anulată",
        type: "success",
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data.message,
        type: "error",
      })
    );
  }
};

const createOrder = (orderData) => async (dispatch) => {
  try {
    orderData.products = orderData.products.map((product) => {
      return { bookId: product.id, quantity: product.qty };
    });
    console.log(orderData);
    await axiosApi.post(`/orders`, orderData);

    dispatch(checkoutCart());
    localStorage.removeItem("localCart");
    dispatch(
      showNotification({
        message: "Comanda a fost realizată cu succes",
        type: "success",
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response?.data?.message,
        type: "error",
      })
    );
  }
};

export default {
  fetchOrders,
  cancelOrder,
  createOrder,
};
