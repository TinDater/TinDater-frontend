import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      likeId: "",
      userId: "",
      likeUserId: "",
    },
  ],
};

const likesListSlice = createSlice({
  name: "likes",
  initialState: initialState,
  reducers: {
    test: (state) => {
      console.log("test")
    },
  }
})



export const { test } = likesListSlice.actions;
export default likesListSlice.reducer;
