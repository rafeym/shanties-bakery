import jwt_decode from 'jwt-decode'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
} from '../types/index'

const initState = {
  token: '',
  loading: false,
  user: null,
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
    case LOGIN_SUCCESS:
      const decoded = verifyToken(payload)
      const { user } = decoded
      return {
        ...state,
        token: payload,
        loading: false,
        user: user,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      }
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
      }
    default:
      return state
  }
}
