import { createSelector } from "reselect";
import { chatSelector } from ".";

export const recentChatsLoadingSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.recentChatsLoading
);

export const recentChatsSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.recentChats
);

export const recentChatsErrorSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.recentChatsError
);

export const sendMessageLoadingSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.sendMessageLoading
);

export const sendMessageErrorSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.sendMessageError
);

export const getUserFriendMessagesLoadingSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.getUserFriendMessagesLoading
);

export const getUserFriendMessagesErrorSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.getUserFriendMessagesError
);

export const userFriendChatsSelector = createSelector(
  [chatSelector],
  (chatState) => chatState.userFriendChats
);
