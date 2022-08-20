import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "../../cookie";
import { api } from "../../shared/api";

export const __login = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/api/auth/login", payload);

    setCookie("token", response.data.token);
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: { nickName: "", result: false },
  },
  reducers: {
    logOutUser: (state, payload) => {
      deleteCookie("token");
      state.loading = false;
      state.user = { nickName: "", result: false };
    },
    checkUser: (state, action) => {
      if (getCookie("token") === undefined) {
        state.user = { nickName: "", result: true };
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(__login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          nickName: action.payload.nickname,
          result: action.payload.success,
        };
      })
      .addCase(__login.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__login.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export const { logOutUser } = loginSlice.actions;
export default loginSlice.reducer;
