import { AppState } from "../store";

export const friendshipSelector = (state: AppState) => state.friendshipReducer
export const authSelector = (state: AppState) => state.authReducer
export const chatSelector = (state: AppState) => state.chatReducer
export const notificationSelector = (state: AppState) => state.notificationReducer