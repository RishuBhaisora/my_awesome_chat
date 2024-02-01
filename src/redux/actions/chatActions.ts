import { ChatPayload, SendMessagePayload } from "../../modals/chatModals";
import {
  GET_USER_FRIEND_MESSAGES,
  GET_USER_FRIEND_MESSAGES_COMPLETED,
  GET_USER_FRIEND_MESSAGES_ERROR,
  GET_RECENT_CHATS,
  GET_RECENT_CHATS_COMPLETED,
  GET_RECENT_CHATS_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_COMPLETED,
  SEND_MESSAGE_ERROR,
} from "./actionConstants";

export const getRecentChatsAction = () => ({
  type: GET_RECENT_CHATS,
});

export const getRecentChatsCompletedAction = (payload: any) => ({
  type: GET_RECENT_CHATS_COMPLETED,
  payload,
});

export const getRecentChatsErrorAction = (error: string) => ({
  type: GET_RECENT_CHATS_ERROR,
  payload: error,
});

export const sendMessageAction = (payload: SendMessagePayload) => ({
  type: SEND_MESSAGE,
  payload,
});

export const sendMessageCompletedAction = (payload: any) => ({
  type: SEND_MESSAGE_COMPLETED,
  payload,
});

export const sendMessageErrorAction = (error: string) => ({
  type: SEND_MESSAGE_ERROR,
  payload: error,
});

export const getUserFriendMessagesAction = (payload: ChatPayload) => ({
  type: GET_USER_FRIEND_MESSAGES,
  payload,
});

export const getUserFriendMessagesCompletedAction = (payload: any) => ({
  type: GET_USER_FRIEND_MESSAGES_COMPLETED,
  payload,
});

export const getUserFriendMessagesErrorAction = (error: string) => ({
  type: GET_USER_FRIEND_MESSAGES_ERROR,
  payload: error,
});
