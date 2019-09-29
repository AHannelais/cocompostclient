import { combineReducers } from "redux";
import authReducer from "./authReducer";
import articleReducer from "./articleReducer";
import imageReducer from "./imageReducer";
export default combineReducers({
  auth: authReducer,
  articles: articleReducer,
  images: imageReducer,
});
