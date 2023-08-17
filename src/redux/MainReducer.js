import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const MainSlice = createSlice({
  name: "MAIN_SLICE",
  initialState: initialState,

  reducers: {
    getUsersListFunc: (state, action) => {
      state.usersList = action.payload;
    },
    getLoggedInUserFunc: (state, action) => {
      state.loggedInUser = action.payload;
    },
    getProductsListFunc: (state, action) => {
      state.getProductsListValue = action.payload;
    },
    getRetrieveProFunc: (state, action) => {
      state.getRetriveProductValue = action.payload;
    },
    getFavoriteListFunc: (state, action) => {
      state.getFavoriteListValue = action.payload;
    },
    colorSelection: (state, action) => {
      state.colorValue = action.payload;
    },

    sizeSelection: (state, { payload }) => {
      state.sizeValue = payload;
      console.log(state.sizeValue);
    },
    addToCart: (state, { payload }) => {
      const indexPro = state.basket.findIndex(
        (item) =>
          item.id === payload.id &&
          item.choise_color === state.colorValue.color &&
          item.choise_size === state.sizeValue.size
      );

      if (indexPro !== -1) {
        state.basket[indexPro].quantity++;
        localStorage.setItem("basketList", JSON.stringify(state.basket));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Uğurla səbətə endirildi",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        state.basket.push({
          ...payload,
          quantity: 1,
          choise_color: state.colorValue.color,
          color_code: state.colorValue.color_code,
          choise_size: state.sizeValue.size,
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Uğurla səbətə endirildi",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("basketList", JSON.stringify(state.basket));
      }
    },
    incr: (state, action) => {
      const chekBasket = state.basket.find(
        (item) =>
          item.id === action.payload.id &&
          item.choise_color === action.payload.choise_color &&
          item.choise_size === action.payload.choise_size
      );

      if (chekBasket) {
        chekBasket.quantity++;
        localStorage.setItem("basketList", JSON.stringify(state.basket));
      }
    },

    decr: (state, action) => {
      const chekBasket = state.basket.find(
        (item) =>
          item.id === action.payload.id &&
          item.choise_color === action.payload.choise_color &&
          item.choise_size === action.payload.choise_size
      );

      if (chekBasket) {
        chekBasket.quantity--;

        if (chekBasket.quantity === 0) {
          let index = state.basket.findIndex(
            (data) =>
              data.id === action.payload.id &&
              data.choise_color === action.payload.choise_color &&
              data.choise_size === action.payload.choise_size
          );
          state.basket.splice(index, 1);
        }

        localStorage.setItem("basketList", JSON.stringify(state.basket));
      }
    },
    delitem: (state, action) => {
      const index = state.basket.findIndex(
        (data) =>
          data.id === action.payload.id &&
          data.choise_color === action.payload.choise_color &&
          data.choise_size === action.payload.choise_size
      );

      if (index !== -1) {
        state.basket.splice(index, 1);
        localStorage.setItem("basketList", JSON.stringify(state.basket));
      }
    },
    getMyFavoriteListFunc: (state, action) => {
      state.getMyFavoriteListValue = action.payload;
    },
    getMyOrderIDfunc: (state, action) => {
      state.myOrderIDvalue = action.payload;
    },
    getMyOrderItemsFunc:(state, action)=>{
      state.myOrderItemsValue=action.payload 
      state.myOrderItemsAddress=action.payload[0].order
    },
    getCategoryListFunc:(state, action)=>{
      state.categoryListValue=action.payload
    }
    
  },
});

export const Data = MainSlice.reducer;
export const {
  getUsersListFunc,
  getLoggedInUserFunc,
  getProductsListFunc,
  getRetrieveProFunc,
  getFavoriteListFunc,
  addToCart,
  incr,
  decr,
  delitem,
  getMyFavoriteListFunc,
  colorSelection,
  sizeSelection,
  getMyOrderIDfunc,
  getMyOrderItemsFunc,
  getCategoryListFunc
} = MainSlice.actions;
