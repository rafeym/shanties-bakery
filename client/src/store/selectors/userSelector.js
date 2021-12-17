import { createSelector } from 'reselect'

const selectUserDomain = (state) => state.userReducer || {}

export const selectSubscribers = createSelector(
  selectUserDomain,
  (userReducer) => userReducer.subscribers
)

export const selectUser = createSelector(
  selectUserDomain,
  (userReducer) => userReducer.user
)
