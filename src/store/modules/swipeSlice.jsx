import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const __getUser = createAsyncThunk("user/GET_USER", async (payload) => {
  const res = await api.get(`/people/${payload}`);
  const resData = res.data.data;

  return resData;
});

export const __likeUser = createAsyncThunk(
  "user/LIKE_USER",
  async (payload) => {
    const { logginId, otherUserId } = payload;
    const res = await api.post(`/people/${logginId}/like`, {
      likeUserId: otherUserId,
    });
    console.log(res.data);
    const resData = res.data.data;

    return resData;
  }
);

export const __dislikeUser = createAsyncThunk(
  "user/DISLIKE_USER",
  async (payload) => {
    const { logginId, otherUserId } = payload;
    const res = await api.post(`/people/${logginId}/dislike`, {
      dislikeUserId: otherUserId,
    });
    const resData = res.data.data;

    return resData;
  }
);

export const __matchUser = createAsyncThunk(
  "user/MATCH_USER",
  async (payload) => {
    const { logginId, otherUserId } = payload;
    await api.post(`/people/${logginId}/like`, { likeUserId: otherUserId });

    return null;
  }
);

const swipeSlice = createSlice({
  name: "swipe", // state.swipe
  initialState: {
    user: {
      userId: 999,
      email: "기본 이메일",
      nickname: "기본 이름",
      address: "기본 주소",
      age: 99,
      gender: 0,
      imageUrl: "no-img-2.png",
      likeMe: true,
      interest: [],
      interest_name: ["일어 나기", "밥 먹기", "잠 자기", "달리기", "마라톤"],
    },
  },
  reducers: {},
  //
  extraReducers: (builder) => {
    builder
      .addCase(__getUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__getUser.rejected, (state, action) => {
        console.log("유저 불러오기 실패");
      })

      .addCase(__likeUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__likeUser.rejected, (state, action) => {
        console.log("좋아요 실패");
      })

      .addCase(__dislikeUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__dislikeUser.rejected, (state, action) => {
        console.log("싫어요 실패");
      })

      .addCase(__matchUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(__matchUser.rejected, (state, action) => {
        console.log("매치 실패");
      });
  },
});

export const {} = swipeSlice.actions;
export default swipeSlice.reducer;
