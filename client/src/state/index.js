// client/src/state/index.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark", // Set the initial mode to dark
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
