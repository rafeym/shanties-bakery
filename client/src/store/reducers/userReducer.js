import jwt_decode from 'jwt-decode'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_FAIL,
  SUBSCRIBE_SUCCESS,
  GET_SUBSCRIBER_LIST_SUCCESS,
  GET_SUBSCRIBER_LIST_FAIL,
  GET_SUBSCRIBER_LIST_REQUEST,
} from '../types/index'

const initState = {
  token: '',
  loading: false,
  user: null,
  subscribers: [],
}

const verifyToken = (token) => {
  const decodedToken = jwt_decode(token)

  const expiresIn = new Date(decodedToken.exp * 1000)

  if (new Date() > expiresIn) {
    localStorage.removeItem('token')
    return null
  } else {
    return decodedToken
  }
}

const token = localStorage.getItem('token')
if (token) {
  const decoded = verifyToken(token)
  if (decoded) {
    initState.token = token
    const { user } = decoded
    initState.user = user
  }
}

export const userReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_SUBSCRIBER_LIST_SUCCESS:
      return {
        ...state,
        subscribers: payload.subscribers,
      }
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case LOGIN_SUCCESS:
      const decoded = verifyToken(payload)
      const { user } = decoded
      return {
        ...state,
        token: payload,
        loading: false,
        user: user,
      }
    case GET_SUBSCRIBER_LIST_FAIL:
    case SUBSCRIBE_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      }
    case GET_SUBSCRIBER_LIST_REQUEST:
    case SUBSCRIBE_REQUEST:
    case SET_LOADING:
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: '',
        user: '',
        loading: false,
      }
    default:
      return state
  }
}
