import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../modules/loginSlice";
import likesListReducer from "../modules/likesListSlice";

import signupReducer from "../modules/signupSlice";
import swipeReducer from "../modules/swipeSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  swipe: swipeReducer,
  likesList: likesListReducer
});

const store = configureStore({
reducer: rootReducer,
});

export default store;