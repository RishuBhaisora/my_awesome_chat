import { Reducer } from "redux";
import { produce } from "immer";
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
} from "../actions/actionConstants";

export interface ChatState {
  recentChatsLoading: boolean;
  recentChats: any[]
  recentChatsError?: string
  sendMessageLoading: boolean
  sendMessageError?:string
  getUserFriendMessagesLoading: boolean
  getUserFriendMessagesError?: string
  userFriendChat?: any
}

const initialState: ChatState = {
  recentChatsLoading: false,
  sendMessageLoading: false,
  getUserFriendMessagesLoading: false,
  recentChats: []
};

export const chatReducer: Reducer<ChatState> = (
  state: ChatState = initialState,
  action: any
) =>
  produce(state, (draft: ChatState) => {
    switch (action.type) {
      case GET_RECENT_CHATS: {
        draft.recentChatsLoading = true;
        break;
      }
      case GET_RECENT_CHATS_COMPLETED: {
        draft.recentChats = action.payload.recentChats;
        draft.recentChatsLoading = false;
        break;
      }
      case GET_RECENT_CHATS_ERROR: {
        draft.recentChatsLoading = false;
        draft.recentChatsError = action.payload;
        break;
      }
      case SEND_MESSAGE: {
        draft.sendMessageLoading = true;
        break;
      }
      case SEND_MESSAGE_COMPLETED: {
        draft.sendMessageLoading = false;
        draft.userFriendChat = action.payload.chat
        break;
      }
      case SEND_MESSAGE_ERROR: {
        draft.sendMessageLoading = false;
        draft.sendMessageError = action.payload;
        break;
      }
      case GET_USER_FRIEND_MESSAGES: {
        draft.getUserFriendMessagesLoading = true;
        break;
      }
      case GET_USER_FRIEND_MESSAGES_COMPLETED: { 
        draft.userFriendChat = action.payload.chat  
        draft.getUserFriendMessagesLoading = false;
        break;
      }
      case GET_USER_FRIEND_MESSAGES_ERROR: {
        draft.getUserFriendMessagesLoading = false;
        draft.getUserFriendMessagesError = action.payload;
        break;
      }
      default:
        break;
    }
  });
