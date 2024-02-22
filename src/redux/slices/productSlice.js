import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    GETProducts: (state, action) => {
      state.data = action.payload.data;
    },
    GetById: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { GETProducts, GetById } = productSlice.actions;
export default productSlice.reducer;
