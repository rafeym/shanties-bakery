import axios from 'axios'
import { toast } from 'react-toastify'
import { devurl } from '../../helper/URL'
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
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
