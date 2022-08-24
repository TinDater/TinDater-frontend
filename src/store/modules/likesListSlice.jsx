import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

const initialState = {
  likes: [],
};

export const __getLikesThunk = createAsyncThunk(
  "like/GET_LIKES",
  async (payload, thunkApi) => {
    //중간작업
    try {
      const response = await api.get(`/people/${payload}/like`);
      const data = response.data.data;
      console.log(response);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const likesListSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
  extraReducers: {
    [__getLikesThunk.fulfilled]: (state, action) => {
      //디스패치 했을때 받아 주는애
      // console.log(action.payload);
      state.likes = action.payload;
    },
    [__getLikesThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { test } = likesListSlice.actions;
export default likesListSlice.reducer;
