import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

/** 랜덤 상대의 정보 불러오기: swipe에 저장합니다. */
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
    const resData = res.data.data;

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

/** 스토어의 user의 정보를 지웁니다. */
export const __clearUserInfo = createAsyncThunk(
  'user/CLEAR_USER_INFO',
  async (payload) => {
    return {};
  }
)

/** 유저의 정보 가져오기: swipe에 저장합니다. */
export const __userInfo = createAsyncThunk(
  "user/USER_INFO",
  async (payload) => {
    const response = await api.get(`/user/${payload}`);
    const resData = response.data.data;

    return resData;
  }
);

const initialState = {
  user: {
    userId: false,
    email: "기본 이메일",
    nickname: "기본 이름",
    address: "기본 주소",
    age: 99,

    gender: 0, 
    imageUrl: 'no-img-2.png',
    likeMe: true,
    interest: ["소셜 미디어", "영화", "커피", "헬스", "웹 개발", "스포츠", "해외축구", "미술관 관람", "산책", "음악감상"],
    x: 0,
    y: 0
  }
}

const swipeSlice = createSlice({
  name: "swipe", // state.swipe
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(__getUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__getUser.rejected, (state, action) => {
        console.log("랜덤 유저 불러오기 실패");
      })

      .addCase(__userInfo.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(__userInfo.rejected, (state, action) => {
        console.log("상세 유저 불러오기 실패");
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
      })
      
      .addCase(__clearUserInfo.fulfilled, (state, action) => {
        state.user = { ...initialState.user };
      })
    },
});

export const {} = swipeSlice.actions;
export default swipeSlice.reducer;
