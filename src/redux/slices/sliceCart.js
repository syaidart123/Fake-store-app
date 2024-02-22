import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },

    decrementCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty--;
      }
      if (itemInCart.qty === 0) {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      }
    },
    removeCart: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addToCart, decrementCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
