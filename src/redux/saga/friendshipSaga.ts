import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { ACCEPT_FRIEND_REQUEST, CANCEL_FRIEND_REQUEST, GET_FRIEND_LIST, GET_FRIEND_REQUESTS, GET_SENT_FRIEND_REQUESTS, GET_SUGGESTED_FRIENDS, REJECT_FRIEND_REQUEST, REMOVE_FRIEND, SEND_FRIEND_REQUEST } from "../actions/actionConstants";
import friendshipService from "../../services/friendshipService";
import { acceptFriendRequestCompletedAction, acceptFriendRequestErrorAction, cancelFriendRequestCompletedAction, cancelFriendRequestErrorAction, getFriendListCompletedAction, getFriendListErrorAction, getFriendRequestsCompletedAction, getFriendRequestsErrorAction, getSentFriendRequestsCompletedAction, getSentFriendRequestsErrorAction, getSuggestedFriendsAction, getSuggestedFriendsCompletedAction, getSuggestedFriendsErrorAction, rejectFriendRequestCompletedAction, rejectFriendRequestErrorAction, removeFriendCompletedAction, removeFriendErrorAction, sendFriendRequestCompletedAction, sendFriendRequestErrorAction } from "../actions/friendshipAction";
import { getErrorMessage } from "../../utils/reduxUtils";

function* getFriendRequestsSaga() {
  try {
    const { data } = yield call(friendshipService.getFriendRequests);
    yield put(getFriendRequestsCompletedAction(data));
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(getFriendRequestsErrorAction(error));
  }
}

function* getSentFriendRequestsSaga() {
  try {
    const { data } = yield call(friendshipService.getSentFriendRequests); 
    yield put(getSentFriendRequestsCompletedAction(data));
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(getSentFriendRequestsErrorAction(error));
  }
}

function* getFriendListSaga() {
  try {
    const { data } = yield call(friendshipService.getFriendList); 
    yield put(getFriendListCompletedAction(data));
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(getFriendListErrorAction(error));
  }
}

function* getSuggestedFriendsSaga() {
  try {
    const { data } = yield call(friendshipService.getSuggestedFriends); 
    yield put(getSuggestedFriendsCompletedAction(data));
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(getSuggestedFriendsErrorAction(error));
  }
}

function* sendFriendRequestSaga(action: any) {
  try {
    const { data } = yield call(friendshipService.sendFriendRequest, action.payload); 
    yield put(sendFriendRequestCompletedAction(data));
    yield put(getSuggestedFriendsAction())
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(sendFriendRequestErrorAction(error));
  }
}

function* acceptFriendRequestSaga(action: any) {
  try {
    const { data } = yield call(friendshipService.acceptFriendRequest, action.payload); 
    yield put(acceptFriendRequestCompletedAction(data));
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(acceptFriendRequestErrorAction(error));
  }
}

function* rejectFriendRequestSaga(action: any) {
  try {
    const { data } = yield call(friendshipService.rejectFriendRequest, action.payload); 
    yield put(rejectFriendRequestCompletedAction(data));
    yield put(getSuggestedFriendsAction())
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(rejectFriendRequestErrorAction(error));
  }
}

function* cancelFriendRequestSaga(action: any) {
  try {
    const { data } = yield call(friendshipService.cancelFriendRequest, action.payload); 
    yield put(cancelFriendRequestCompletedAction(data));
    yield put(getSuggestedFriendsAction())
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(cancelFriendRequestErrorAction(error));
  }
}

function* removeFriendSaga(action: any) {
  try {
    const { data } = yield call(friendshipService.removeFriend, action.payload); 
    yield put(removeFriendCompletedAction(data));
    yield put(getSuggestedFriendsAction())
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error)
    yield put(removeFriendErrorAction(error));
  }
}

export function* friendshipSaga() {
  yield all([takeLatest(GET_FRIEND_REQUESTS, getFriendRequestsSaga)]);
  yield all([takeLatest(GET_SENT_FRIEND_REQUESTS, getSentFriendRequestsSaga)]);
  yield all([takeLatest(GET_FRIEND_LIST, getFriendListSaga)]);
  yield all([takeLatest(GET_SUGGESTED_FRIENDS, getSuggestedFriendsSaga)]);
  yield all([takeLatest(SEND_FRIEND_REQUEST, sendFriendRequestSaga)])
  yield all([takeLatest(ACCEPT_FRIEND_REQUEST, acceptFriendRequestSaga)])
  yield all([takeLatest(REJECT_FRIEND_REQUEST, rejectFriendRequestSaga)])
  yield all([takeLatest(CANCEL_FRIEND_REQUEST, cancelFriendRequestSaga)])
  yield all([takeLatest(REMOVE_FRIEND, removeFriendSaga)])
}
