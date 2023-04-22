import { createSelector } from 'reselect'
import { friendSelector } from '.'

export const getFriendsSelector = createSelector(
  [friendSelector],
  (friendState) => friendState.mockData
)
