import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../modules/loginSlice";
import signupReducer from "../modules/signupSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
