import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../modules/loginSlice";

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
