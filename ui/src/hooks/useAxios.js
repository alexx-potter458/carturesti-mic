import { useState, useEffect } from "react";
import axiosApi from "../utils/axios";

function useAxios() {
  const [axiosApiInstance, setAxiosApiInstance] = useState(null);

  useEffect(() => {
    setAxiosApiInstance(axiosApi);
  }, []);

  const setAuthToken = (token) => {
    if (axiosApiInstance) {
      axiosApiInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  };

  return { axiosApiInstance, setAuthToken };
}

export default useAxios;
