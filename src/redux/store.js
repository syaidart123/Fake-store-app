import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/sliceCart.js";
import productReducer from "./slices/productSlice.js";
import openCart from "./slices/openCart.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    open: openCart,
  },
});
// console.log("create store : ", store.getState());

// store.subscribe(() => {
//   console.log("store change : ", store.getState());
// });

export default store;
