import axios from 'axios'
import { toast } from 'react-toastify'
import { devurl } from '../../helper/URL'

import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/index'

export const addProductToCartAction =
  (id, qty) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${devurl}/api/products/product/${id}`)

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: data.product._id,
          name: data.product.name,
          image: data.product.cloudinary_secure_url,
          price: data.product.price,
          qty,
        },
      })

      localStorage.setItem('cart', JSON.stringify(getState().cartReducer.cart))
    } catch (error) {}
  }

export const removeProductFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  })
  localStorage.setItem('cart', JSON.stringify(getState().cartReducer.cart))
  toast('Item removed', {
    position: 'bottom-center',
    autoClose: 1200,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
  })
}
