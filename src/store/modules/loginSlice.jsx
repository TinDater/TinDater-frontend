import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/api";

export const __login = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/user/login", payload);

    localStorage.setItem("token", response.data.result.result);
    return response.data;
  }
);

export const __kakaoLogin = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get("/user/kakao");

    localStorage.setItem("token", response.data.result.result);
    return response.data;
  }
);

export const __checkToken = createAsyncThunk(
  "__checkToken/CHECK_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get("/auth");
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: { nickName: "", result: false },
    loading: false,
    error: null,
  },
  reducers: {
    logOutUser: (state, payload) => {
      state.user = { nickName: "", result: false };
    },
  },
  //
  extraReducers: (builder) => {
    builder

      .addCase(__login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          nickName: action.payload.nickname,
          result: true,
        };
      })
      .addCase(__login.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(__checkToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(__checkToken.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__checkToken.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export const { logOutUser } = loginSlice.actions;
export default loginSlice.reducer;
