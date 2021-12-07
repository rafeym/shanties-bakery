import { createSelector } from 'reselect'

const selectOrdersDomain = (state) => state.orderReducer || {}

export const selectLoading = createSelector(
  selectOrdersDomain,
  (orderReducer) => orderReducer.loading
)

export const selectOrders = createSelector(
  selectOrdersDomain,
  (orderReducer) => orderReducer.orders
)

export const selectPageLimit = createSelector(
  selectOrdersDomain,
  (orderReducer) => orderReducer.pageLimit
)

export const selectCount = createSelector(
  selectOrdersDomain,
  (orderReducer) => orderReducer.count
)

export const selectOrder = createSelector(
  selectOrdersDomain,
  (orderReducer) => orderReducer.order
)

export const selectCancelledOrders = createSelector(
  selectOrdersDomain,
  (orderReducer) => orderReducer.cancelledOrders
)

export const selectCancelledOrder = createSelector(
  selectOrdersDomain,
  (orderReducer) => orderReducer.cancelledOrder
)
