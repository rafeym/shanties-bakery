import axios from 'axios'
import { toast } from 'react-toastify'
import {
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
} from '../types/index'

import { devurl } from '../../helper/URL'

export const createProductAction = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST })
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const { data } = await axios.post(
      `${devurl}/api/products/`,
      productData,
      config
    )

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data })
  } catch (error) {
    const errors = error?.response?.data?.errors
    if (errors) {
      errors.forEach((error) => toast.error(error.msg))
    }
    dispatch({
      type: CREATE_PRODUCT_FAIL,
    })
  }
}

export const fetchProductsAction = (page) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST })
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.get(`${devurl}/api/products/${page}`, config)

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAIL })
  }
}

export const deleteProductAction = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT_REQUEST,
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.delete(`${devurl}/api/products/${id}`, config)

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAIL })
  }
}

export const fetchProductAction = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCT_REQUEST,
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const { data } = await axios.get(
      `${devurl}/api/products/product/${id}`,
      config
    )
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_FAIL })
  }
}

export const updateProductAction = (id, productData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  dispatch({ type: UPDATE_PRODUCT_REQUEST })

  try {
    await axios.put(`${devurl}/api/products/${id}`, productData, config)

    dispatch({ type: UPDATE_PRODUCT_SUCCESS })
  } catch (error) {
    const errors = error?.response?.data?.errors
    if (errors) {
      errors.forEach((error) => toast.error(error.msg))
    }
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
    })
  }
}
