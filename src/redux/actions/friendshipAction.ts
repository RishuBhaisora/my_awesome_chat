import {
  ACCEPT_FRIEND_REQUEST,
  ACCEPT_FRIEND_REQUEST_COMPLETED,
  ACCEPT_FRIEND_REQUEST_ERROR,
  CANCEL_FRIEND_REQUEST,
  CANCEL_FRIEND_REQUEST_COMPLETED,
  CANCEL_FRIEND_REQUEST_ERROR,
  GET_FRIEND_LIST,
  GET_FRIEND_LIST_COMPLETED,
  GET_FRIEND_LIST_ERROR,
  GET_FRIEND_REQUESTS,
  GET_FRIEND_REQUESTS_COMPLETED,
  GET_FRIEND_REQUESTS_ERROR,
  GET_SENT_FRIEND_REQUESTS,
  GET_SENT_FRIEND_REQUESTS_COMPLETED,
  GET_SENT_FRIEND_REQUESTS_ERROR,
  GET_SUGGESTED_FRIENDS,
  GET_SUGGESTED_FRIENDS_COMPLETED,
  GET_SUGGESTED_FRIENDS_ERROR,
  REJECT_FRIEND_REQUEST,
  REJECT_FRIEND_REQUEST_COMPLETED,
  REJECT_FRIEND_REQUEST_ERROR,
  REMOVE_FRIEND,
  REMOVE_FRIEND_COMPLETED,
  REMOVE_FRIEND_ERROR,
  SEND_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST_COMPLETED,
  SEND_FRIEND_REQUEST_ERROR,
REMOVE_FRIENDS_TOAST,
} from "./actionConstants";

export const getFriendRequestsAction = () => ({
  type: GET_FRIEND_REQUESTS,
});

export const getFriendRequestsCompletedAction = (friendRequests: any) => ({
  type: GET_FRIEND_REQUESTS_COMPLETED,
  payload: friendRequests,
});

export const getFriendRequestsErrorAction = (error: string) => ({
  type: GET_FRIEND_REQUESTS_ERROR,
  payload: error,
});

export const getSentFriendRequestsAction = () => ({
  type: GET_SENT_FRIEND_REQUESTS,
});

export const getSentFriendRequestsCompletedAction = (friendRequests: any) => ({
  type: GET_SENT_FRIEND_REQUESTS_COMPLETED,
  payload: friendRequests,
});

export const getSentFriendRequestsErrorAction = (error: string) => ({
  type: GET_SENT_FRIEND_REQUESTS_ERROR,
  payload: error,
});

export const getFriendListAction = () => ({
  type: GET_FRIEND_LIST,
});

export const getFriendListCompletedAction = (friends: any) => ({
  type: GET_FRIEND_LIST_COMPLETED,
  payload: friends,
});

export const getFriendListErrorAction = (error: string) => ({
  type: GET_FRIEND_LIST_ERROR,
  payload: error,
});

export const getSuggestedFriendsAction = () => ({
  type: GET_SUGGESTED_FRIENDS,
});

export const getSuggestedFriendsCompletedAction = (friends: any) => ({
  type: GET_SUGGESTED_FRIENDS_COMPLETED,
  payload: friends,
});

export const getSuggestedFriendsErrorAction = (error: string) => ({
  type: GET_SUGGESTED_FRIENDS_ERROR,
  payload: error,
});

export const sendFriendRequestAction = (friendId: number) => ({
  type: SEND_FRIEND_REQUEST,
  payload: friendId,
});

export const sendFriendRequestCompletedAction = (data: any) => ({
  type: SEND_FRIEND_REQUEST_COMPLETED,
  payload: data,
});

export const sendFriendRequestErrorAction = (error: string) => ({
  type: SEND_FRIEND_REQUEST_ERROR,
  payload: error,
});

export const acceptFriendRequestAction = (friendId: number) => ({
  type: ACCEPT_FRIEND_REQUEST,
  payload: friendId,
});

export const acceptFriendRequestCompletedAction = (data: any) => ({
  type: ACCEPT_FRIEND_REQUEST_COMPLETED,
  payload: data,
});

export const acceptFriendRequestErrorAction = (error: string) => ({
  type: ACCEPT_FRIEND_REQUEST_ERROR,
  payload: error,
});

export const rejectFriendRequestAction = (friendId: number) => ({
  type: REJECT_FRIEND_REQUEST,
  payload: friendId,
});

export const rejectFriendRequestCompletedAction = (data: any) => ({
  type: REJECT_FRIEND_REQUEST_COMPLETED,
  payload: data,
});

export const rejectFriendRequestErrorAction = (error: string) => ({
  type: REJECT_FRIEND_REQUEST_ERROR,
  payload: error,
});

export const cancelFriendRequestAction = (friendId: number) => ({
  type: CANCEL_FRIEND_REQUEST,
  payload: friendId,
});

export const cancelFriendRequestCompletedAction = (data: any) => ({
  type: CANCEL_FRIEND_REQUEST_COMPLETED,
  payload: data,
});

export const cancelFriendRequestErrorAction = (error: string) => ({
  type: CANCEL_FRIEND_REQUEST_ERROR,
  payload: error,
});

export const removeFriendAction = (friendId: number) => ({
  type: REMOVE_FRIEND,
  payload: friendId,
});

export const removeFriendCompletedAction = (data: any) => ({
  type: REMOVE_FRIEND_COMPLETED,
  payload: data,
});

export const removeFriendErrorAction = (error: string) => ({
  type: REMOVE_FRIEND_ERROR,
  payload: error,
});
export const removeFriendsToastAction = () => ({
    type: REMOVE_FRIENDS_TOAST,
  })
