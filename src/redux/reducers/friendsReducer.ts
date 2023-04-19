import { Reducer } from "redux";
import { GET_FRIENDS } from "../actions/actionConstants";
import { produce } from "immer";

export interface FriendsState {
  mockData: any;
}
const initialState: FriendsState = {
  mockData: "No Data Yet",
};

export const friendsReducer: Reducer<FriendsState> = (
  state: FriendsState = initialState,
  action: any
) =>
  produce(state, (draft: FriendsState) => {
    switch (action.type) {
      case GET_FRIENDS: {
        draft.mockData = action.payload;
        break;
      }
      default:
        break;
    }
  });
