import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL } from '../types/index'

const initState = {
  loading: false,
  orders: [],
}

export const orderReducer = (state = initState, action) => {
  const { payload, type } = action
  switch (type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [payload.order, ...state.orders],
      }
    case ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ORDER_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
