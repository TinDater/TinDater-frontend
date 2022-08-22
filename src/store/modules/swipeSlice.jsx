import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const __getUser = createAsyncThunk(
  'user/GET_USER',
  async (payload) => {
    const res = await api.get(`/people/${payload}`);
    const resData = res.data.data;

    return resData;
  }
)

export const __likeUser = createAsyncThunk(
  'user/LIKE_USER',
  async (payload) => {
    const {logginId, otherUserId} = payload;
    const res = await api.post(`/people/${logginId}/like`, {likeUserId: otherUserId});
    const resData = res.data.data;

    return resData;
  }
)

export const __dislikeUser = createAsyncThunk(
  'user/DISLIKE_USER',
  async (payload) => {
    const {logginId, otherUserId} = payload;
    const res = await api.post(`/people/${logginId}/dislike`, {dislikeUserId: otherUserId});
    const resData = res.data.data

    return resData;
  }
)

export const __matchUser = createAsyncThunk(
  'user/MATCH_USER',
  async (payload) => {
    const {logginId, otherUserId} = payload;
    await api.post(`/people/${logginId}/like`, {likeUserId: otherUserId});

    return null;
  }
)

export const __userMyInfo = createAsyncThunk(
  'user/MY_INFO',
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
      userId: 999,
      email: '이메일',
      nickname: '이름', 
      age: 99,
      address: '기본주소',
      gender: 0, 
      imageUrl: 'img.jpg',
      interest: [],
      likeMe: 1
    }
  },
  reducers: {
  },
  //
  extraReducers: (builder) => {
    builder.addCase(__getUser.fulfilled, (state, action) => {
        state.user = {...action.payload};
      })
      .addCase(__getUser.rejected, (state, action) => {
        console.log('유저 불러오기 실패');
      })

      .addCase(__likeUser.fulfilled, (state, action) => {
        state.user = {...action.payload};
      })
      .addCase(__likeUser.rejected, (state, action) => {
        console.log('좋아요 실패');
      })

      .addCase(__dislikeUser.fulfilled, (state, action) => {
        state.user = {...action.payload};
      })
      .addCase(__dislikeUser.rejected, (state, action) => {
        console.log('싫어요 실패');
      })
      
      .addCase(__matchUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(__matchUser.rejected, (state, action) => {
        console.log('매치 실패');
      })

      .addCase(__userMyInfo.fulfilled, (state, action) => { 
        state.user = {...action.payload};
      })
      .addCase(__userMyInfo.rejected, (state, action) => {
        console.log('유저 상세 정보 불러오기 실패');
      })
  },
});

export const { } = swipeSlice.actions;
export default swipeSlice.reducer;
