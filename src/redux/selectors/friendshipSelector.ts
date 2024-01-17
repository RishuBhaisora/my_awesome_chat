import { createSelector } from 'reselect'
import { friendshipSelector } from '.'

export const friendRequestsLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.friendRequestsLoading
)

export const friendRequestsSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.friendRequests
)

export const sentFriendRequestsErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.sentFriendRequestsError
)

export const sentFriendRequestsLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.sentFriendRequestsLoading
)

export const sentFriendRequestsSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.sentFriendRequests
)

export const friendRequestsErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.sentFriendRequestsError
)

export const friendsListLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.friendListLoading
)

export const friendsListSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.friendList
)

export const friendsListErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.friendListError
)

export const suggestedFriendsLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.suggestedFriendsLoading
)

export const suggestedFriendsSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.suggestedFriends
)

export const suggestedFriendsErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.suggestedFriendsError
)

export const sendFriendRequestLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.sendFriendRequestLoading
)

export const sendFriendRequestSuccessSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.sendFriendRequestSuccessMessage
)

export const sendFriendRequestErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.sendFriendRequestError
)

export const acceptFriendRequestLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.acceptFriendRequestLoading
)

export const acceptFriendRequestSuccessSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.acceptFriendRequestSuccessMessage
)

export const acceptFriendRequestErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.acceptFriendRequestError
)

export const rejectFriendRequestLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.rejectFriendRequestLoading
)

export const rejectFriendRequestSuccessSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.rejectFriendRequestSuccessMessage
)

export const rejectFriendRequestErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.rejectFriendRequestError
)

export const cancelFriendRequestLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.cancelFriendRequestLoading
)

export const cancelFriendRequestSuccessSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.cancelFriendRequestSuccessMessage
)

export const cancelFriendRequestErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.cancelFriendRequestError
)

export const removeFriendLoadingSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.removeFriendLoading
)

export const removeFriendSuccessSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.removeFriendSuccessMessage
)

export const removeFriendErrorSelector = createSelector(
  [friendshipSelector],
  (friendState) => friendState.removeFriendError
)
