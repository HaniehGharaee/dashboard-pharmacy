import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_API_URL;

const defaultHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return headers;
};

const handleError = (error) => {
  // errors Auth
  if (error?.status === 400 || error?.status === 401) {
    if (error?.message) return toast.warning(error.message);
    if (error?.error) return toast.warning(error.error);
    if (error?.StatusDesc) return toast.warning(error.StatusDesc);
    if (error?.data?.messages) {
      for (let msg of error?.data?.messages) {
        toast.warning(msg?.message);
      }
    }
    return;
  }

  // other errors
  if (error?.message) return toast.error(error.message);
  if (error?.error) return toast.error(error.error);
  if (error?.StatusDesc) return toast.error(error.StatusDesc);
  if (error?.data?.messages) {
    for (let msg of error?.data?.messages) {
      toast.error(msg?.message);
    }
  }
};

const get = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios
    .get(baseUrl + url, {
      params,
      headers: { ...defaultHeaders(), ...optionalHeaders },
    })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const post = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios
    .post(baseUrl + url, params, {
      headers: { ...defaultHeaders(), ...optionalHeaders },
    })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const put = async (params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios
    .put(baseUrl + url, params, {
      headers: { ...defaultHeaders(), ...optionalHeaders },
    })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const remove = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios(baseUrl + url, {
    params,
    data: params,
    headers: { ...defaultHeaders(), ...optionalHeaders },
  })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const apiCall = { get, post, put, remove };
export default apiCall;
