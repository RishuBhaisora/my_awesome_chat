import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import {
  GET_RECENT_CHATS,
  SEND_MESSAGE,
  GET_USER_FRIEND_MESSAGES,
} from "../actions/actionConstants";
import { getErrorMessage } from "../../utils/reduxUtils";
import { ChatPayload, SendMessagePayload } from "../../modals/chatModals";
import { chatService } from "../../services/ChatService";
import { getRecentChatsCompletedAction, getRecentChatsErrorAction, getUserFriendMessagesCompletedAction, getUserFriendMessagesErrorAction, sendMessageCompletedAction, sendMessageErrorAction } from "../actions/chatActions";

export function* getRecentChatsSaga(): any {
  try {
    const token = localStorage.getItem("token") || ""
    const { data } = yield call(chatService.getRecentChats, token);
    yield put(getRecentChatsCompletedAction(data));
  } catch (e: any) {
    const error = getErrorMessage(e)
    console.warn(error)
    yield put(getRecentChatsErrorAction(error));
  }
}

export function* sendMessageSaga(action: {
  type: "SEND_MESSAGE";
  payload: SendMessagePayload;
}): any {
  try {
    yield call(chatService.sendMessage, action.payload);
  } catch (e: any) {
    const error = getErrorMessage(e)
    console.warn(error)
    yield put(sendMessageErrorAction(error));
  }
}

export function* getUserFriendMessagesSaga(action: {
  type: "GET_USER_FRIEND_MESSAGES";
  payload: ChatPayload;
}): any {
  try {
    const token = localStorage.getItem("token") || ""
    const { data } = yield call(chatService.userFriendMessages, action.payload, token);
    yield put(getUserFriendMessagesCompletedAction(data));
  } catch (e: any) {
    const error = getErrorMessage(e)
    console.warn(error)
    yield put(getUserFriendMessagesErrorAction(error))
  }
}

export function* chatSaga() {
  yield all([takeLatest(GET_RECENT_CHATS, getRecentChatsSaga)]);
  yield all([takeLatest(SEND_MESSAGE, sendMessageSaga)]);
  yield all([takeLatest(GET_USER_FRIEND_MESSAGES, getUserFriendMessagesSaga)]);
}
