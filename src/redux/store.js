import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import contactReducer from "./contactSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
  },
});

export default store;
