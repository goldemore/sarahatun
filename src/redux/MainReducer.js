import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const MainSlice = createSlice({
  name: "MAIN_SLICE",
  initialState: initialState,

  reducers: {
    incFunc: (state, action) => {
      state.count += 1;
    },
  },
});

export const Data = MainSlice.reducer;
export const { incFunc } = MainSlice.actions;
