import { createSelector } from 'reselect'
import { friendSelector } from './appSelectors'

export const getFriendsSelector = createSelector(
  [friendSelector],
  (friendState) => friendState.mockData
)
