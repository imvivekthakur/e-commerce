// Import necessary modules
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Import your reducers
import authReducer from "./authSlice";
import contactReducer from "./contactSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

// Configure Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

// Create persisted reducers
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedContactReducer = persistReducer(persistConfig, contactReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);

// Create the store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contact: persistedContactReducer,
    product: persistedProductReducer,
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
  },
});

// Create a persisted version of the store
export const persistor = persistStore(store);

export default store;
