import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import CartTable from '../components/Cart/CartTable'
import {
  addProductToCartAction,
  removeProductFromCart,
} from '../store/actions/cartActions'

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer)

  const dispatch = useDispatch()

  const qtyChangeHandler = (id, qty) => {
    dispatch(addProductToCartAction(id, qty))
  }

  const removeProduct = (id) => {
    dispatch(removeProductFromCart(id))
  }

  const getCartTotal = () => {
    return cart.reduce(
      (curr, prev) => Math.ceil(prev.price * prev.qty + curr),
      0
    )
  }

  return (
    <>
      <Header />
      <CartTable
        cart={cart}
        qtyChangeHandler={qtyChangeHandler}
        removeProduct={removeProduct}
        getCartTotal={getCartTotal}
      />
      <Footer />
    </>
  )
}

export default Cart
