import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./API.js";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const contactFormThunk = createAsyncThunk(
  "contact/submit",
  async (data) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    return await Api.post(`contact/`, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactFormThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(contactFormThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(contactFormThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default contactSlice.reducer;
