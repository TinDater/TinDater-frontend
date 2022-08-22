import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/api";

export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("auth/signup", payload);
    alert(response.data.msg);
    return response.data;
  }
);

export const __editProfile = createAsyncThunk(
  "profile/EDITPROFILE_LOG",
  async (payload, thunkAPI) => {
    const response = await api.put(`user/${payload.userId}`, payload);
    alert(response.data.msg);
    return response.data;
  }
);

export const __checkUsername = createAsyncThunk(
  "signup/CHECKID_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post(`auth/email`, payload);
    if (!response.data.success) alert(response.data.msg);
    return response.data.success;
  }
);

export const __checkNickname = createAsyncThunk(
  "signup/CHECKNICK_LOG",
  async (payload, thunkAPI) => {
    console.log(payload);
    const response = await api.post(`auth/nickname`, payload);
    if (!response.data.result) alert(response.data.msg);
    return response.data.success;
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    success: false,
    checkName: false,
    checkNick: false,
    userId: 999,
  },
  reducers: {
    changeCheckName: (state) => {
      state.checkName = false;
    },
    changeCheckNick: (state) => {
      state.checkNick = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(__signup.fulfilled, (state, action) => {
        state.success = action.payload.success;
        state.userId = action.payload.userId;
      })

      .addCase(__editProfile.fulfilled, (state, action) => {
        state.success = action.payload.success;
        state.userId = action.payload.userId;
      })

      .addCase(__checkUsername.fulfilled, (state, action) => {
        state.checkName = action.payload;
      })
      .addCase(__checkUsername.rejected, (state, action) => {
        state.checkName = true;
      })

      .addCase(__checkNickname.fulfilled, (state, action) => {
        state.checkNick = action.payload;
      })
      .addCase(__checkNickname.rejected, (state, action) => {
        state.checkNick = true;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const { changeCheckName, changeCheckNick } = signupSlice.actions;
export default signupSlice.reducer;
