import axios from 'axios'
import { toast } from 'react-toastify'
import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  CART_RESET,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  UPDATE_ORDER_DELIVERY_STATUS_REQUEST,
  UPDATE_ORDER_DELIVERY_STATUS_SUCCESS,
  UPDATE_ORDER_DELIVERY_STATUS_FAIL,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CANCEL_ORDER_FAIL,
  FETCH_CANCELLED_ORDERS_REQUEST,
  FETCH_CANCELLED_ORDERS_SUCCESS,
  FETCH_CANCELLED_ORDERS_FAIL,
  FETCH_CANCELLED_ORDER_REQUEST,
  FETCH_CANCELLED_ORDER_SUCCESS,
  FETCH_CANCELLED_ORDER_FAIL,
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
    const outOfStock = error?.response?.data?.outOfStock
    if (errors) {
      errors.forEach((error) => toast.error(error.msg))
    }
    if (outOfStock) {
      outOfStock.forEach((error) => toast.error(error.msg))
    }
    dispatch({
      type: ORDER_FAIL,
    })
  }
}

export const fetchOrdersAction = (page) => async (dispatch) => {
  dispatch({ type: FETCH_ORDERS_REQUEST })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const { data } = await axios.get(`${devurl}/api/orders/${page}`, config)

    dispatch({
      type: FETCH_ORDERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_ORDERS_FAIL,
    })
  }
}

export const fetchOrderAction = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_ORDER_REQUEST,
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.get(`${devurl}/api/orders/order/${id}`, config)
    dispatch({
      type: FETCH_ORDER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_ORDER_FAIL,
    })
  }
}

export const updateOrderStatusAction = (id, orderStat) => async (dispatch) => {
  dispatch({ type: UPDATE_ORDER_STATUS_REQUEST })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.put(
      `${devurl}/api/orders/updateOrderStatus/${id}`,
      { orderStat },
      config
    )

    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS })
    toast.success(data.msg)
  } catch (error) {
    const errors = error?.response?.data?.errors
    if (errors) {
      errors.forEach((error) => toast.error(error.msg))
    }
    dispatch({ type: UPDATE_ORDER_STATUS_FAIL })
  }
}

export const updateOrderDeliveryStatusAction =
  (id, deliveryStat) => async (dispatch) => {
    dispatch({ type: UPDATE_ORDER_DELIVERY_STATUS_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const { data } = await axios.put(
        `${devurl}/api/orders/updateDeliveryStatus/${id}`,
        { deliveryStat },
        config
      )

      dispatch({ type: UPDATE_ORDER_DELIVERY_STATUS_SUCCESS })

      toast.success(data.msg)
    } catch (error) {
      const errors = error?.response?.data?.errors
      if (errors) {
        errors.forEach((error) => toast.error(error.msg))
      }
      dispatch({ type: UPDATE_ORDER_DELIVERY_STATUS_FAIL })
    }
  }

export const cancelOrderAction = (id) => async (dispatch) => {
  dispatch({
    type: CANCEL_ORDER_REQUEST,
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.delete(
      `${devurl}/api/orders/deleteOrder/${id}`,
      config
    )

    dispatch({
      type: CANCEL_ORDER_SUCCESS,
      payload: data,
    })
    toast.success(data.msg)
  } catch (error) {
    dispatch({ type: CANCEL_ORDER_FAIL })
  }
}

export const fetchCancelledOrdersAction = (page) => async (dispatch) => {
  dispatch({ type: FETCH_CANCELLED_ORDERS_REQUEST })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.get(
      `${devurl}/api/orders/cancelled/${page}`,
      config
    )

    dispatch({
      type: FETCH_CANCELLED_ORDERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_CANCELLED_ORDERS_FAIL,
    })
  }
}

export const fetchCancelledOrderAction = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_CANCELLED_ORDER_REQUEST,
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.get(
      `${devurl}/api/orders/cancelled/details/${id}`,
      config
    )

    dispatch({
      type: FETCH_CANCELLED_ORDER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_CANCELLED_ORDER_FAIL,
    })
  }
}
