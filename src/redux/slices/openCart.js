import { createSlice } from "@reduxjs/toolkit";

const openCart = createSlice({
  name: "openCart",
  initialState: {
    data: false,
  },
  reducers: {
    open(state) {
      state.data = true;
    },
    close(state) {
      state.data = false;
    },
  },
});

export const { open, close } = openCart.actions;
export default openCart.reducer;
