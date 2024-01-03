import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./API.js";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  wishlist: [],
};

export const addToWishlistThunk = createAsyncThunk(
  "wishlist/add",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.post(`wishlist/add`, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const removeFromWishlistThunk = createAsyncThunk(
  "wishlist/remove",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.post(`wishlist/remove`, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const getWishlistThunk = createAsyncThunk(
  "wishlist/get",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.get(`wishlist/get`, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const wishlist = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addToWishlistThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlistThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(addToWishlistThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      // remove from cart

      .addCase(removeFromWishlistThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromWishlistThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.wishlist = action.payload.data.wishlist.products;
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(removeFromWishlistThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      // get cart

      .addCase(getWishlistThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishlistThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.wishlist = action.payload.data.wishlist.products;
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(getWishlistThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default wishlist.reducer;
