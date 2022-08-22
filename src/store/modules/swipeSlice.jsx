import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const __getUser = createAsyncThunk(
  'user/GET_USER',
  async (payload) => {
    const userId = payload;
    const res = await api.get(`/people/${userId}`);
    const resData = res.data.data;

    return resData;
  }
)

export const __likeUser = createAsyncThunk(
  'user/LIKE_USER',
  async (payload) => {
    const {logginId, otherUserId} = payload;
    console.log(payload);
    const res = await api.post(`/people/${logginId}/like`, {likeUserId: otherUserId});
    const resData = res.data.data

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
  async (payload, thunkAPI) => {
    const res = await api.get(`/user/${payload}`);
    const resData = res.data.data
    
    console.log(resData);

    return resData;
  }
)

const swipeSlice = createSlice({
  name: "swipe", // state.swipe
  initialState: {
    loading: false,
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
        state.loading = false;
        state.user = {...action.payload};
      })
      .addCase(__getUser.rejected, (state, action) => {
        state.loading = false;
        console.log('유저 불러오기 실패');
      })
      .addCase(__getUser.pending, (state, action) => {
        state.loading = true;
      })
      
      .addCase(__likeUser.fulfilled, (state, action) => {
        state.loading = false;
        
        state.user = {...action.payload};
      })
      .addCase(__likeUser.rejected, (state, action) => {
        state.loading = false;
        console.log('좋아요 실패');
      })
      .addCase(__likeUser.pending, (state, action) => {
        state.loading = true;
      })
      
      .addCase(__dislikeUser.fulfilled, (state, action) => {
        state.loading = false;
        
        state.user = {...action.payload};
      })
      .addCase(__dislikeUser.rejected, (state, action) => {
        state.loading = false;
        console.log('싫어요 실패');
      })
      .addCase(__dislikeUser.pending, (state, action) => {
        state.loading = true;
      })
      
      .addCase(__matchUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(__matchUser.rejected, (state, action) => {
        state.loading = false;
        console.log('매치 실패');
      })
      .addCase(__matchUser.pending, (state, action) => {
        state.loading = true;
      })
      
      .addCase(__userMyInfo.fulfilled, (state, action) => { 
        state.loading = false;
        state.user = {...action.payload};
      })
      .addCase(__userMyInfo.rejected, (state, action) => {
        state.loading = false;
        console.log('내 정보 불러오기 실패');
      })
      .addCase(__userMyInfo.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const { } = swipeSlice.actions;
export default swipeSlice.reducer;
