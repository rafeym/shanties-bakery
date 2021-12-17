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
  FETCH_CANCELLED_ORDERS_FAIL,
  FETCH_CANCELLED_ORDERS_REQUEST,
  FETCH_CANCELLED_ORDERS_SUCCESS,
  FETCH_CANCELLED_ORDER_REQUEST,
  FETCH_CANCELLED_ORDER_SUCCESS,
  FETCH_CANCELLED_ORDER_FAIL,
  ARCHIVE_ORDER_REQUEST,
  ARCHIVE_ORDER_SUCCESS,
  ARCHIVE_ORDER_FAIL,
  FETCH_ARCHIVED_ORDERS_REQUEST,
  FETCH_ARCHIVED_ORDERS_SUCCESS,
  FETCH_ARCHIVED_ORDERS_FAIL,
  FETCH_ARCHIVED_ORDER_REQUEST,
  FETCH_ARCHIVED_ORDER_SUCCESS,
  FETCH_ARCHIVED_ORDER_FAIL,
} from '../types/index'

const initState = {
  loading: false,
  orders: [],
  order: {},
  cancelledOrders: [],
  cancelledOrder: {},
  archivedOrders: [],
  archivedOrder: {},
  count: 0,
  pageLimit: 0,
  cancelledOrdersCount: 0,
  archivedOrdersCount: 0,
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
    case FETCH_ARCHIVED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        archivedOrder: payload.order,
      }
    case FETCH_ARCHIVED_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        archivedOrdersCount: payload.count,
        pageLimit: payload.pageLimit,
        archivedOrders: payload.archivedOrders,
      }
    case ARCHIVE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [
          ...state.orders.filter((order) => order._id !== payload.order._id),
        ],
      }
    case FETCH_CANCELLED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        cancelledOrder: payload.order,
      }
    case FETCH_CANCELLED_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        cancelledOrdersCount: payload.count,
        pageLimit: payload.pageLimit,
        cancelledOrders: payload.cancelledOrders,
      }
    case CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [
          ...state.orders.filter((order) => order._id !== payload.order._id),
        ],
      }
    case FETCH_ARCHIVED_ORDER_REQUEST:
    case FETCH_ARCHIVED_ORDERS_REQUEST:
    case ARCHIVE_ORDER_REQUEST:
    case FETCH_CANCELLED_ORDER_REQUEST:
    case FETCH_CANCELLED_ORDERS_REQUEST:
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
    case FETCH_ARCHIVED_ORDER_FAIL:
    case FETCH_ARCHIVED_ORDERS_FAIL:
    case ARCHIVE_ORDER_FAIL:
    case FETCH_CANCELLED_ORDER_FAIL:
    case FETCH_CANCELLED_ORDERS_FAIL:
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
