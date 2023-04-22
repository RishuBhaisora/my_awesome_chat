import { AppState } from "../store";

export const friendSelector = (state: AppState) => state.friendsReducer
export const authSelector = (state: AppState) => state.authReducer