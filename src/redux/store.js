import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import contactReducer from "./contactSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    product: productReducer,
  },
});

export default store;
