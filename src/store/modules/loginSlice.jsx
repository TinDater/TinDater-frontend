import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "../../cookie";
// axios 기본 세팅
import { api } from "../../shared/api";

// 로그인
export const __login = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("auth/login", payload);

    // 유니버셜 쿠키 이용해서 토큰을 쿠키에 저장합니다.
    setCookie("token", response.data.data.token);
    // 로그인 상태값 true/false 를 반환합니다.
    return response.data.data;
  }
);

/** 유저 주소 값 업데이트 */
export const __updateCoord = createAsyncThunk(
  "log/UPDATE_COORD",
  async (payload, thunkAPI) => {
    const {userId} = payload;
    await api.patch(`user/${userId}/coord`, payload);
    
    return payload;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    // 초기값, 유저 닉네임은 공백입니다.
    user: { 
      nickName: "", 
      imageUrl: "img/no-img-2.png", 
      result: false, 
      x: 50, 
      y: 100 
    },
    userId: 999,
  },
  reducers: {
    // 로그아웃시 쿠키의 토큰을 삭제하고 닉네임을 공백으로 합니다.
    logOutUser: (state, payload) => {
      deleteCookie("token");
      state.user = { nickName: "", imageUrl: "img/no-img-2.png", result: false };
    },
    // 토큰이 있는지 확인하고 없으면 로그아웃처리 합니다.
    checkUser: (state, action) => {
      if (getCookie("token") === undefined) {
        state.user = { nickName: "", imageUrl: "img/no-img-2.png", result: true };
      }
    },
  },

  extraReducers: (builder) => {
    builder
      // 로그인
      .addCase(__login.fulfilled, (state, action) => {
        state.user = {
          // 닉네임에는 백으로부터 받은 닉네임을 저장합니다.
          nickName: action.payload.nickname,
          imageUrl: action.payload.imageUrl,
          // 결과값은 여기서 백에게 받은 값으로 true가 됩니다.
          result: action.payload.success,
        };
        state.userId = action.payload.userId;
      })
      .addCase(__updateCoord.fulfilled, (state, action) => {
        state.user = { ...state.user, x: action.payload.x, y: action.payload.y};
        state.userId = action.payload.userId;
      });
  },
});

export const { logOutUser } = loginSlice.actions;
export default loginSlice.reducer;
