import { AppState } from "../store";

export const friendshipSelector = (state: AppState) => state.friendshipReducer
export const authSelector = (state: AppState) => state.authReducer