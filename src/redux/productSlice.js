import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./API.js";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  user: {},
  profile: "",
};
export const createProductThunk = createAsyncThunk(
  "product/create",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    return await Api.post(`product/create/`, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const getAllProductThunk = createAsyncThunk(
  "product/getAll",
  async (data) => {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    return await Api.get(`product/getAll/`, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(createProductThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
