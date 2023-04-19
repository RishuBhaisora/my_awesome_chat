import { GET_FRIENDS } from "./actionConstants";

export const getFriendsAction = () => ({
  type: GET_FRIENDS,
  payload: { hello: "world" },
});
