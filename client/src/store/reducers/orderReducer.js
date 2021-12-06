import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDER_FAIL,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  UPDATE_ORDER_DELIVERY_STATUS_REQUEST,
  UPDATE_ORDER_DELIVERY_STATUS_SUCCESS,
  UPDATE_ORDER_DELIVERY_STATUS_FAIL,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_FAIL,
  CANCEL_ORDER_SUCCESS,
} from '../types/index'

const initState = {
  loading: false,
  orders: [],
  count: 0,
  pageLimit: 0,
  order: {},
}

export const orderReducer = (state = initState, action) => {
  const { payload, type } = action
  switch (type) {
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: payload.order,
      }
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        count: payload.count,
        pageLimit: payload.pageLimit,
        loading: false,
        orders: payload.orders,
      }
    case ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [payload.order, ...state.orders],
      }
    case UPDATE_ORDER_STATUS_SUCCESS:
    case UPDATE_ORDER_DELIVERY_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [
          ...state.orders.filter((order) => order._id !== payload.order._id),
        ],
      }
    case CANCEL_ORDER_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
    case UPDATE_ORDER_DELIVERY_STATUS_REQUEST:
    case FETCH_ORDER_REQUEST:
    case FETCH_ORDERS_REQUEST:
    case ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CANCEL_ORDER_FAIL:
    case UPDATE_ORDER_STATUS_FAIL:
    case UPDATE_ORDER_DELIVERY_STATUS_FAIL:
    case FETCH_ORDER_FAIL:
    case FETCH_ORDERS_FAIL:
    case ORDER_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
