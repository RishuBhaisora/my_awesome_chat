import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { friendshipReducer } from "./friendshipReducer";

const rootReducer = combineReducers({
  friendshipReducer,
  authReducer,
});
export default rootReducer;
