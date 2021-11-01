import axios from 'axios'
import { toast } from 'react-toastify'
import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  CART_RESET,
} from '../types/index'
import { devurl } from '../../helper/URL'

export const createOrder = (orderData) => async (dispatch) => {
  dispatch({
    type: ORDER_REQUEST,
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const { data } = await axios.post(`${devurl}/api/orders`, orderData, config)

    dispatch({
      type: ORDER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: CART_RESET,
    })
    localStorage.removeItem('cart')
    toast.success(data.msg, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    })
  } catch (error) {
    const errors = error?.response?.data?.errors
    if (errors) {
      errors.forEach((error) => toast.error(error.msg))
    }
    dispatch({
      type: ORDER_FAIL,
    })
  }
}
