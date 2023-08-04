import axios from "axios";
import {
  getLoggedInUserFunc,
  getMessagesListFunc,
  getProductsListFunc,
  getRetrieveProFunc,
  getUsersListFunc,
} from "../redux/MainReducer";

// For user List
export const getUsersList = () => async (dispatch) => {
  return await axios
    .get("https://derzi.pythonanywhere.com/api/account/user-list/")
    .then((resp) => {
      console.log(resp.data);
      dispatch(getUsersListFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

// For a specific user

export const getLoggedInuser = (userID) => async (dispatch) => {
  return await axios
    .get(
      `https://derzi.pythonanywhere.com/api/account/user-retrieve-update-delete/${userID}/`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      }
    )
    .then((resp) => {
      console.log(resp);
      dispatch(getLoggedInUserFunc(resp.data));
    })
    .catch((err) => {});
};
// For a message list
export const getMessageList = () => async (dispatch) => {
  return await axios
    .get("https://derzi.pythonanywhere.com/api/account/message-list/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    })
    .then((resp) => {
      console.log(resp);
      dispatch(getMessagesListFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductsList = () => async (dispatch) => {
  return await axios
    .get("https://derzi.pythonanywhere.com/api/tailor/product-list/")
    .then((resp) => {
      console.log(resp);
      dispatch(getProductsListFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRetrieveProduct = (id) => async (dispatch) => {
  return await axios
    .get(`https://derzi.pythonanywhere.com/api/tailor/product-retrieve/${id}/`)
    .then((resp) => {
      console.log(resp);
      dispatch(getRetrieveProFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
