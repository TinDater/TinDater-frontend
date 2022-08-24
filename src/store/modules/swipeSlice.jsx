import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

/** 상대 user의 정보 불러오기 */
export const __getUser = createAsyncThunk("user/GET_USER", async (payload) => {
  const res = await api.get(`/people/${payload}`);
  const resData = res.data.data;
  return resData;
});

/** 상대 user에게 좋아요 버튼을 눌렀을 때 */
export const __likeUser = createAsyncThunk(
  "user/LIKE_USER",
  async (payload) => {
    const { logginId, otherUserId } = payload;
    const res = await api.post(`/people/${logginId}/like`, {
      likeUserId: otherUserId,
    });
    // if (JSON.stringify(res.data.data)) {
    //   return {
    //     userId: 999,
    //     email: "기본 이메일",
    //     nickname: "기본 이름",
    //     address: "기본 주소",
    //     age: 99,
    //     gender: 0,
    //     imageUrl: "no-img-2.png",
    //     likeMe: true,
    //     interest: [],
    //     interest_name: ["일어 나기", "밥 먹기", "잠 자기", "달리기", "마라톤"],
    //   };
    // }
    const resData = res.data.data;
    console.log(resData);

    return resData;
  }
);

/** 상대 user에게 싫어요 버튼을 눌렀을 때 */
export const __dislikeUser = createAsyncThunk(
  "user/DISLIKE_USER",
  async (payload) => {
    const { logginId, otherUserId } = payload;
    const res = await api.post(`/people/${logginId}/dislike`, {
      dislikeUserId: otherUserId,
    });
    if (JSON.stringify(res.data.data)) {
      return {
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
      };
    }
    const resData = res.data.data;

    return resData;
  }
);

/** user가 macth일 때(서로 좋아요를 눌렀을 때) */
export const __matchUser = createAsyncThunk(
  "user/MATCH_USER",
  async (payload) => {
    const { logginId, otherUserId } = payload;
    await api.post(`/people/${logginId}/like`, { likeUserId: otherUserId });

    return null;
  }
)

/** user에 사용자의 주소를 수정하도록 요청합니다. */
export const __patchUserLocation = createAsyncThunk(
  'user/PATCH_LOCATION',
  async (payload) => {
    const res = await api.get(`/user/${payload}`);
    const resData = res.data.data;

    return resData;
  }
)

const swipeSlice = createSlice({
  name: "swipe", // state.swipe
  initialState: {
    user: {
      userId: false,
      email: "기본 이메일",
      nickname: "기본 이름",
      address: "기본 주소",
      age: 99,

      gender: 0, 
      imageUrl: 'no-img-2.png',
      likeMe: true,
      interest: [],
      interest_name: ['일어 나기', '밥 먹기', '잠 자기', '달리기', '마라톤'],
      x: 0,
      y: 0
    }
  },
  reducers: {},
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
        
      })
      .addCase(__matchUser.rejected, (state, action) => {
        console.log("매치 실패");
      });
  },
});

export const {} = swipeSlice.actions;
export default swipeSlice.reducer;
