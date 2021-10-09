import axios from 'axios'
import { toast } from 'react-toastify'
import setAuthToken from '../../helper/setAuthToken'
import { devurl } from '../../helper/URL'
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_LOADING,
  USER_FAIL,
  USER_LOADED,
  LOGOUT,
} from '../types/index'

export const userLoginAction =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify({ email, password })

    dispatch({
      type: LOGIN_REQUEST,
    })
    try {
      const res = await axios.post(`${devurl}/api/users/login`, body, config)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
      dispatch({ type: SET_LOADING })
      dispatch(loadUserAction())
    } catch (err) {
      const errors = err.response.data.errors
      if (errors) {
        errors.forEach((error) => toast.error(error.msg))
      }
      dispatch({
        type: LOGIN_FAIL,
      })
    }
  }

export const loadUserAction = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get(`${devurl}/api/users`)
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: USER_FAIL,
    })
  }
}

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}
