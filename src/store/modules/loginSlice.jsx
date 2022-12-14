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

// 재 접속시 토큰 유효기간 확인
export const __checkToken = createAsyncThunk(
  "__checkToken/CHECK_LOG",
  async (payload, thunkAPI) => {
    // 토큰으로 유효값 확인하기
    const response = await api.get("/auth");
    console.log(response.data);

    return response.data;
  }
);

/** 나의 정보 가져오기 */
export const __myInfo = createAsyncThunk("user/MY_INFO", async (payload) => {
  const response = await api.get(`/user/${payload}`);
  console.log(response.data.data);
  const resData = response.data.data;

  return resData;
});

/** 유저 주소 값 업데이트 */
export const __updateCoord = createAsyncThunk(
  "log/UPDATE_COORD",
  async (payload, thunkAPI) => {
    const { userId } = payload;
    await api.patch(`user/${userId}/coord`, payload);

    return payload;
  }
);

const initialState = {
  // 초기값, 유저 닉네임은 공백입니다.
  user: {
    userId: false,
    email: "",
    nickname: "",
    address: "",
    age: 99,
    gender: 0,
    imageUrl: "no-img-2.png",
    likeMe: true,
    interest: [],
    interest_name: ["소셜 미디어", "영화", "커피", "헬스", "웹 개발", "스포츠", "해외축구", "미술관 관람", "산책", "음악감상"],
    result: false,
    x: 0,
    y: 0,
  },
  check: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // 로그아웃시 쿠키의 토큰을 삭제하고 정보들을 초기화 합니다.
    logOutUser: (state, payload) => {
      state.user = initialState.user;
    },
  },

  extraReducers: (builder) => {
    builder
      // 로그인
      .addCase(__login.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__checkToken.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.check = !state.check;
        console.log(state.user);
      })
      .addCase(__checkToken.rejected, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__myInfo.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__updateCoord.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          x: action.payload.x,
          y: action.payload.y,
        };
      });
  },
});

export const { logOutUser } = loginSlice.actions;
export default loginSlice.reducer;
