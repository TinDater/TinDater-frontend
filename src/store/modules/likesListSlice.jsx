import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
likes:[]
};

export const getLikesThunk = createAsyncThunk(
  "getLikes", 
  async (payload, api) => {
  //중간작업
  try {
    const data = await axios.get(
      "http://localhost:3001/likes"
      );
      return api.fulfillWithValue(data.data);
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

export const likesListSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
  extraReducers: {
    [getLikesThunk.fulfilled]: (state, action) => {     //디스패치 했을때 받아 주는애
      state.likes = [...action.payload];
    },
    [getLikesThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { test } = likesListSlice.actions;
export default likesListSlice.reducer;
