import {
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
} from '../types/index'

const initState = {
  loading: false,
  products: [],
  count: 0,
  pageLimit: 0,
  product: {},
}

export const productReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload.product,
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [
          ...state.products.filter(
            (product) => product._id !== payload.product._id
          ),
        ],
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        count: payload.count,
        pageLimit: payload.pageLimit,
        products: payload.products,
        loading: false,
      }
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [payload.product, ...state.products],
      }
    case UPDATE_PRODUCT_FAIL:
    case FETCH_PRODUCT_FAIL:
    case FETCH_PRODUCTS_FAIL:
    case CREATE_PRODUCT_FAIL:
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
      }
    case UPDATE_PRODUCT_REQUEST:
    case FETCH_PRODUCT_REQUEST:
    case FETCH_PRODUCTS_REQUEST:
    case CREATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
