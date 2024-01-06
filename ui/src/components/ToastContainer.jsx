import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ToastContainer = () => {
  const toastStore = useSelector((state) => state.toast);

  useEffect(() => {
    if (toastStore.type === "success") toast.success(toastStore.message);
    if (toastStore.type === "error") toast.error(toastStore.message);
  }, [toastStore]);

  return;
};

export default ToastContainer;
