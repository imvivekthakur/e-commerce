import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./API.js";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  cart: [],
};

export const addToCartThunk = createAsyncThunk("cart/add", async (data) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  return await Api.post(`cart/add`, data, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
});

export const removeFromCartThunk = createAsyncThunk(
  "cart/remove",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.post(`cart/remove`, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const getCartThunk = createAsyncThunk("cart/get", async (data) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  return await Api.get(`cart/get`, config)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return err.response;
    });
});

export const deleteProductThunk = createAsyncThunk(
  "cart/delete",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.post(`cart/delete`, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // add from cart

      .addCase(addToCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
          state.cart = action.payload.data.cart.items;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(addToCartThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      // remove from cart

      .addCase(removeFromCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.cart = action.payload.data.cart.items;
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(removeFromCartThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      // get cart

      .addCase(getCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
          state.cart = action.payload.data.cart;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(getCartThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      // delete product
      .addCase(deleteProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.cart = action.payload.data.cart.items;
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(deleteProductThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default cartSlice.reducer;
