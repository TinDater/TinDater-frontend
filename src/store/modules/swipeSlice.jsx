import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const __getUser = createAsyncThunk(
  'user/GET_USER',
  async (payload, thunkAPI) => {
    const userId = payload;
    const res = await api.get(`/people/${userId}`);

    return res.data;
  }
)

export const __likeUser = createAsyncThunk(
  'user/LIKE_USER',
  async (payload, thunkAPI) => {
    const {userId, otherUserId} = payload;
    const res = await api.post(`/people/${userId}/like`, {likeUserId: otherUserId});

    return res.data;
  }
)

export const __dislikeUser = createAsyncThunk(
  'user/DISLIKE_USER',
  async (payload, thunkAPI) => {
    const {userId, otherUserId} = payload;
    const res = await api.post(`/people/${userId}/dislike`, {dislikeUserId: otherUserId});

    return res.data;
  }
)

export const __matchUser = createAsyncThunk(
  'user/MATCH_USER',
  async (payload, thunkAPI) => {
    const {userId, dislikeUserId} = payload;
    const res = await api.get(`/people/${userId}`);


    return res.data;
  }
)

const swipeSlice = createSlice({
  name: "swipe", // state.swipe
  initialState: {
    loading: false,
    user: {
      userId: 999,
      email: '',
      nickname: '', 
      age: 99,
      address: '',
      gender: 0, 
      imageUrl: '',
      interest: [],
      likeMe: false
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
      //
      .addCase(__likeUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log('좋아요');
        
        state.user = {...action.payload};
      })
      .addCase(__likeUser.rejected, (state, action) => {
        state.loading = false;
        console.log('좋아요 실패');
      })
      .addCase(__likeUser.pending, (state, action) => {
        state.loading = true;
      })
      //
      .addCase(__dislikeUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log('싫어요');
        
        state.user = {...action.payload};
      })
      .addCase(__dislikeUser.rejected, (state, action) => {
        state.loading = false;
        console.log('싫어요 실패');
      })
      .addCase(__dislikeUser.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const { } = swipeSlice.actions;
export default swipeSlice.reducer;
