import { combineReducers } from "redux";

// import {
//   FETCH_POST_SUCCESS,
//   DELETE_POST,
//   TOGGLE_LIKE_POST,
//   REORDER_POSTS,
// } from "./constatns";
import cards from "./reducers/cards";
import app from "./reducers/app";

const rootReducer = combineReducers({
  app,
  cards,
});

export default rootReducer;
