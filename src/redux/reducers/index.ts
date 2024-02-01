import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { friendshipReducer } from "./friendshipReducer";
import { chatReducer } from "./chatReducer";

const appReducer = combineReducers({
  friendshipReducer,
  authReducer,
  chatReducer
});

const rootReducer = (state: any, action:any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
