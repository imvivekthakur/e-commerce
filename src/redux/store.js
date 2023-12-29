import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import contactReducer from "./contactSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
