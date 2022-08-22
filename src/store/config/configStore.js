import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../modules/loginSlice";
import likesListReducer from "../modules/likesListSlice";

const rootReducer = combineReducers({
login: loginReducer,
likeslist: likesListReducer
});

const store = configureStore({
reducer: rootReducer,
});

export default store;