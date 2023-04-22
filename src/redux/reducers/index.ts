import { combineReducers } from "redux";
import { friendsReducer } from "./friendsReducer";
import { authReducer } from "./authReducer";
const rootReducer = combineReducers({
  friendsReducer,
  authReducer,
});
export default rootReducer;
