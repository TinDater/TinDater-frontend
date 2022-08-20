import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../modules/loginSlice";
import swipeReducer from "../modules/swipeSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  swipe: swipeReducer 
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
