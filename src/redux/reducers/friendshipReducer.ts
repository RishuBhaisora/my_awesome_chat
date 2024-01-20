import { Reducer } from "redux";
import { ACCEPT_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST_COMPLETED, ACCEPT_FRIEND_REQUEST_ERROR, CANCEL_FRIEND_REQUEST, CANCEL_FRIEND_REQUEST_COMPLETED, CANCEL_FRIEND_REQUEST_ERROR, GET_FRIEND_LIST, GET_FRIEND_LIST_COMPLETED, GET_FRIEND_LIST_ERROR, GET_FRIEND_REQUESTS, GET_FRIEND_REQUESTS_COMPLETED, GET_FRIEND_REQUESTS_ERROR, GET_SENT_FRIEND_REQUESTS, GET_SENT_FRIEND_REQUESTS_COMPLETED, GET_SENT_FRIEND_REQUESTS_ERROR, GET_SUGGESTED_FRIENDS, GET_SUGGESTED_FRIENDS_COMPLETED, GET_SUGGESTED_FRIENDS_ERROR, REJECT_FRIEND_REQUEST, REJECT_FRIEND_REQUEST_COMPLETED, REJECT_FRIEND_REQUEST_ERROR, REMOVE_FRIEND, REMOVE_FRIEND_COMPLETED, REMOVE_FRIEND_ERROR, SEND_FRIEND_REQUEST, SEND_FRIEND_REQUEST_COMPLETED, SEND_FRIEND_REQUEST_ERROR,
REMOVE_FRIENDS_TOAST} from "../actions/actionConstants";
import { produce } from "immer";

export interface FriendshipState {
  friendRequestsLoading: boolean;
  friendRequests: any[];
  friendRequestsError?: string
  sentFriendRequestsLoading: boolean;
  sentFriendRequests: any[]
  sentFriendRequestsError?: string 
  friendListLoading: boolean
  friendList: any[]
  friendListError?: string
  suggestedFriendsLoading: boolean
  suggestedFriends: any[]
  suggestedFriendsError?: string
  sendFriendRequestLoading: boolean
  sendFriendRequestError?: string 
  sendFriendRequestSuccessMessage?: string
  acceptFriendRequestLoading: boolean
  acceptFriendRequestError?: string 
  acceptFriendRequestSuccessMessage?: string
  rejectFriendRequestLoading: boolean
  rejectFriendRequestError?: string 
  rejectFriendRequestSuccessMessage?: string
  cancelFriendRequestLoading: boolean
  cancelFriendRequestError?: string 
  cancelFriendRequestSuccessMessage?: string
  removeFriendLoading: boolean
  removeFriendSuccessMessage?: string
  removeFriendError?: string
}

const initialState: FriendshipState = {
  friendRequests: [],
  friendRequestsLoading: false,
  sentFriendRequestsLoading: false,
  sentFriendRequests: [],
  friendListLoading: false,
  friendList: [],
  suggestedFriendsLoading: false,
  suggestedFriends: [],
  acceptFriendRequestLoading: false,
  rejectFriendRequestLoading: false,
  sendFriendRequestLoading: false,
  cancelFriendRequestLoading: false,
  removeFriendLoading: false
};

export const friendshipReducer: Reducer<FriendshipState> = (
  state: FriendshipState = initialState,
  action: any
) =>
  produce(state, (draft: FriendshipState) => {
    switch (action.type) {
      case GET_FRIEND_REQUESTS: {
        draft.friendRequestsLoading = true;
        break;
      }
      case GET_FRIEND_REQUESTS_COMPLETED: {
        draft.friendRequestsLoading = false;
        draft.friendRequests = action.payload
        break;
      }
      case GET_FRIEND_REQUESTS_ERROR: {
        draft.friendRequestsLoading = false;
        draft.friendRequestsError = action.payload
        break;
      }
      case GET_SENT_FRIEND_REQUESTS: {
        draft.friendRequestsLoading = true;
        break;
      }
      case GET_SENT_FRIEND_REQUESTS_COMPLETED: {
        draft.sentFriendRequestsLoading = false;
        draft.sentFriendRequests = action.payload
        break;
      }
      case GET_SENT_FRIEND_REQUESTS_ERROR: {
        draft.sentFriendRequestsLoading = false;
        draft.sentFriendRequestsError = action.payload
        break;
      }
      case GET_FRIEND_LIST: {
        draft.friendListLoading = true;
        break;
      }
      case GET_FRIEND_LIST_COMPLETED: {
        draft.friendListLoading = false;
        draft.friendList = action.payload
        break;
      }
      case GET_FRIEND_LIST_ERROR: {
        draft.friendListLoading = false;
        draft.friendListError = action.payload
        break;
      }
      case GET_SUGGESTED_FRIENDS: {
        draft.suggestedFriendsLoading = true;
        break;
      }
      case GET_SUGGESTED_FRIENDS_COMPLETED: {
        draft.suggestedFriendsLoading = false;
        draft.suggestedFriends = action.payload
        break;
      }
      case GET_SUGGESTED_FRIENDS_ERROR: {
        draft.suggestedFriendsLoading = false;
        draft.suggestedFriendsError = action.payload
        break;
      }
      case SEND_FRIEND_REQUEST: {
        draft.sendFriendRequestLoading = true;
        break;
      }
      case SEND_FRIEND_REQUEST_COMPLETED: {
        draft.sendFriendRequestLoading = false;
        draft.sendFriendRequestSuccessMessage = action.payload.message
        draft.sentFriendRequests = action.payload.sentFriendRequests
        break;
      }
      case SEND_FRIEND_REQUEST_ERROR: {
        draft.sendFriendRequestLoading = false;
        draft.sendFriendRequestError = action.payload
        break;
      }
      case ACCEPT_FRIEND_REQUEST: {
        draft.acceptFriendRequestLoading = true;
        break;
      }
      case ACCEPT_FRIEND_REQUEST_COMPLETED: {
        draft.acceptFriendRequestLoading = false;
        draft.acceptFriendRequestSuccessMessage = action.payload.message
        draft.friendRequests = action.payload.pendingRequests
        draft.friendList = action.payload.friends
        break;
      }
      case ACCEPT_FRIEND_REQUEST_ERROR: {
        draft.acceptFriendRequestLoading = false;
        draft.acceptFriendRequestError = action.payload
        break;
      }
      case REJECT_FRIEND_REQUEST: {
        draft.rejectFriendRequestLoading = true;
        break;
      }
      case REJECT_FRIEND_REQUEST_COMPLETED: {
        draft.rejectFriendRequestLoading = false;
        draft.rejectFriendRequestSuccessMessage = action.payload.message
        draft.friendRequests = action.payload.pendingRequests
        break;
      }
      case REJECT_FRIEND_REQUEST_ERROR: {
        draft.rejectFriendRequestLoading = false;
        draft.rejectFriendRequestError = action.payload
        break;
      }
      case CANCEL_FRIEND_REQUEST: {
        draft.cancelFriendRequestLoading = true;
        break;
      }
      case CANCEL_FRIEND_REQUEST_COMPLETED: {
        draft.cancelFriendRequestLoading = false;
        draft.cancelFriendRequestSuccessMessage = action.payload.message
        draft.sentFriendRequests = action.payload.sentFriendRequests
        break;
      }
      case CANCEL_FRIEND_REQUEST_ERROR: {
        draft.cancelFriendRequestLoading = false;
        draft.cancelFriendRequestError = action.payload
        break;
      }
      case REMOVE_FRIEND: {
        draft.removeFriendLoading = true;
        break;
      }
      case REMOVE_FRIEND_COMPLETED: {
        draft.removeFriendLoading = false;
        draft.removeFriendSuccessMessage = action.payload.message
        draft.friendList = action.payload.friends
        break;
      }
      case REMOVE_FRIEND_ERROR: {
        draft.removeFriendLoading = false;
        draft.removeFriendError = action.payload
        break;
      }
      case REMOVE_FRIENDS_TOAST:{
      draft.sendFriendRequestSuccessMessage = undefined;
        draft.sendFriendRequestError=undefined
        draft.removeFriendSuccessMessage = undefined;
        draft.removeFriendError = undefined;
        draft.acceptFriendRequestSuccessMessage = undefined;
        draft.acceptFriendRequestError = undefined;
        draft.rejectFriendRequestSuccessMessage = undefined;
        draft.rejectFriendRequestError = undefined;
        draft.cancelFriendRequestSuccessMessage = undefined;
        draft.cancelFriendRequestError = undefined;
      }
      default:
        break;
    }
  });
