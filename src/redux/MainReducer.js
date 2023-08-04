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
      console.log(state.loggedInUser);
    },
    getMessagesListFunc: (state, action) => {
      state.getMessagesListValue = action.payload;
    },
    getProductsListFunc: (state, action) => {
      state.getProductsListValue = action.payload;
    },
    getRetrieveProFunc: (state, action) => {
      state.getRetriveProductValue = action.payload;
    },
    addToCart: (state, action) => {
      const chekBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (chekBasket) {
        chekBasket.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
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
        (item) => item.id === action.payload.id
      );
      chekBasket.quantity += 1;
      localStorage.setItem("basketList", JSON.stringify(state.basket));
    },

    decr: (state, action) => {
      const chekBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      chekBasket.quantity -= 1;
      localStorage.setItem("basketList", JSON.stringify(state.basket));

      if (chekBasket.quantity === 0) {
        let index = state.basket.findIndex(
          (data) => data.id === action.payload.id
        );
        state.basket.splice(index, 1);
        localStorage.setItem("basketList", JSON.stringify(state.basket));
      }
    },
    delitem: (state, action) => {
      let index = state.basket.findIndex(
        (data) => data.id === action.payload.id
      );
      state.basket.splice(index, 1);
      localStorage.setItem("basketList", JSON.stringify(state.basket));
    },
  },
});

export const Data = MainSlice.reducer;
export const {
  getUsersListFunc,
  getLoggedInUserFunc,
  getMessagesListFunc,
  getProductsListFunc,
  getRetrieveProFunc,
  addToCart,
  incr,
  decr,
  delitem,
} = MainSlice.actions;
