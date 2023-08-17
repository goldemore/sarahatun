import axios from "axios";
import {
  getCategoryListFunc,
  getFavoriteListFunc,
  getLoggedInUserFunc,
  getMyFavoriteListFunc,
  getMyOrderIDfunc,
  getMyOrderItemsFunc,
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
// For  products list
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

// For a single page of products
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

// For to add to favorite

export const getFavoriteList = () => async (dispatch) => {
  return await axios
    .get("https://derzi.pythonanywhere.com/api/tailor/favourite-list/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    })
    .then((resp) => {
      console.log(resp);
      dispatch(getFavoriteListFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

// For to add to myfavorite list
export const getMyFavoriteList = () => async (dispatch) => {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken) {
    return await axios
      .get("https://derzi.pythonanywhere.com/api/tailor/myfavourite-list/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      })
      .then((resp) => {
        // console.log(resp);
        dispatch(getMyFavoriteListFunc(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
// For myorder
export const getMyOrderID = () => async (dispatch) => {
  return await axios
    .get("https://derzi.pythonanywhere.com/api/tailor/myorder/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    })
    .then((resp) => {
      console.log(resp);
      dispatch(getMyOrderIDfunc(resp.data)); 
    })
    .catch((err) => {
      console.log(err);
    });
};

// For myorderitems
export const getMyOrderItems=()=>async(dispatch)=>{
  return await axios
  .get("https://derzi.pythonanywhere.com/api/tailor/myorderitems/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
    }})
  .then(resp=>{
    console.log(resp);
    dispatch(getMyOrderItemsFunc(resp.data))
  })
  .catch(err=>{
    console.log(err);
  })
}

// For category list 
export const getCategoryList=()=>async(dispatch)=>{
  return await axios
  .get("https://derzi.pythonanywhere.com/api/tailor/category-list/")
  .then(resp=>{
    console.log(resp);
    dispatch(getCategoryListFunc(resp.data))
  })
  .catch(err=>{
    console.log(err);
  })
}


