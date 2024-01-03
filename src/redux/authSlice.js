import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./API.js";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  user: {},
  profile: "",
};

export const emailThunk = createAsyncThunk("auth/email", async (data) => {
  return await Api.post(`auth/email`, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
});

export const emailVerifyThunk = createAsyncThunk(
  "auth/email/verify",
  async (data) => {
    return await Api.post(`auth/email/verify`, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const registerUserThunk = createAsyncThunk(
  "auth/signup",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.post(`auth/signup`, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }
);

export const loginUserThunk = createAsyncThunk("auth/login", async (data) => {
  return await Api.post(`auth/login`, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
});

export const profileThunk = createAsyncThunk("auth/profile", async (data) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  return await Api.get(`auth/profile`, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
});

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(emailThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emailThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(emailThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      .addCase(emailVerifyThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emailVerifyThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(emailVerifyThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.success) {
          state.isSuccess = true;
          state.profile = action.payload.data;
          state.user = action.payload.data.user;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(registerUserThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      // LOGIN USER
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.data.success) {
          state.isSuccess = true;
          state.user = action.payload.data.user;
          state.profile = action.payload.data;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(loginUserThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      //  profile
      .addCase(profileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(profileThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
