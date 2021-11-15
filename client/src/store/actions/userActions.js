import axios from 'axios'
import { toast } from 'react-toastify'
import { devurl } from '../../helper/URL'
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAIL,
  GET_SUBSCRIBER_LIST_REQUEST,
  GET_SUBSCRIBER_LIST_SUCCESS,
} from '../types/index'

export const userLoginAction = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  dispatch({ type: LOGIN_REQUEST })
  try {
    const { data } = await axios.post(
      `${devurl}/api/users/login`,
      formData,
      config
    )

    localStorage.setItem('token', data.token)
    dispatch({ type: LOGIN_SUCCESS, payload: data.token })
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

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}

export const subscribeAction = (subscribeData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  dispatch({ type: SUBSCRIBE_REQUEST })

  try {
    const { data } = await axios.post(
      `${devurl}/api/newsletter`,
      subscribeData,
      config
    )
    dispatch({ type: SUBSCRIBE_SUCCESS })
    toast.success(data.msg)
  } catch (error) {
    const errors = error.response.data.errors

    if (errors) {
      errors.forEach((error) => toast.error(error.msg))
    }
    dispatch({
      type: SUBSCRIBE_FAIL,
    })
  }
}

export const getSubscriberListAction = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  dispatch({ type: GET_SUBSCRIBER_LIST_REQUEST })

  try {
    const { data } = await axios.get(
      `${devurl}/api/newsletter/subscribers`,
      config
    )

    dispatch({ type: GET_SUBSCRIBER_LIST_SUCCESS, payload: data })
  } catch (error) {}
}
