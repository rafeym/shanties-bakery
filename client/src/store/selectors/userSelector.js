import { createSelector } from 'reselect'

const selectUserDomain = (state) => state.userReducer || {}

export const selectSubscribers = createSelector(
  selectUserDomain,
  (userReducer) => userReducer.subscribers
)
