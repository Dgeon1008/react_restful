// 합치기위한 목적
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
  user,
  post
})

export default rootReducer;