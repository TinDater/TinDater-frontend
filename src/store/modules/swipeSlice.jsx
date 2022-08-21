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
    const {userId, otherUserId} = payload;
    await api.post(`/people/${userId}/like`, {likeUserId: otherUserId});

    return null;
  }
)

export const __userMyInfo = createAsyncThunk(
  'user/MY_INFO',
  async (payload, thunkAPI) => {
    const {userId} = payload;
    const res = await api.get(`/people/${userId}/like`);

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
