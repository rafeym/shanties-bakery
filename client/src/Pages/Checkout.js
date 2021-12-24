import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
  addProductToCartAction,
  removeProductFromCart,
} from '../store/actions/cartActions'
import { createOrder } from '../store/actions/orderActions'

import Footer from '../components/Footer/Footer'
import Header from '../components/Navbar/Header'

import Spinner from '../components/Spinner/Spinner'
import { FaTruck, FaMoneyBill, FaRegCreditCard } from 'react-icons/fa'

import { toast } from 'react-toastify'
import './styles/Checkout.scss'

const Checkout = () => {
  const INIT_STATE = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
  }
  const [orderData, setOrderData] = useState(INIT_STATE)

  const { cart } = useSelector((state) => state.cartReducer)
  const { loading } = useSelector((state) => state.orderReducer)
  const dispatch = useDispatch()

  const getCartTotal = () => {
    return cart.reduce(
      (curr, prev) => Math.ceil(prev.price * prev.qty + curr),
      0
    )
  }

  const removeProduct = (id) => {
    dispatch(removeProductFromCart(id))
  }

  const qtyChangeHandler = (id, qty) => {
    dispatch(addProductToCartAction(id, qty))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setOrderData({
      ...orderData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      fname: orderData.fname,
      lname: orderData.lname,
      email: orderData.email,
      address: orderData.address,
      phone: orderData.phone,
      cart,
    }

    const { fname, lname, phone, email, address } = orderData

    if (
      fname === '' ||
      lname === '' ||
      phone === '' ||
      email === '' ||
      address === ''
    ) {
      toast.error('Please fill in all the required fields.')
    } else {
      dispatch(createOrder(data))
    }
  }

  return (
    <>
      <Header />
      <div className='checkout-page-wrapper'>
        <div className='checkout-container'>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              <div className='checkout-title'>Checkout</div>
              <div className='required-title'>
                Fill in all the required fields *
              </div>
              <form className='checkout-form'>
                <div className='user-details'>
                  <div className='input-box'>
                    <span className='details'>First Name*</span>
                    <input
                      type='text'
                      placeholder='First Name'
                      name='fname'
                      value={orderData.fname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='input-box'>
                    <span className='details'>Last Name*</span>
                    <input
                      type='text'
                      placeholder='Last Name'
                      name='lname'
                      value={orderData.lname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='input-box'>
                    <span className='details'>Phone Number*</span>
                    <input
                      type='text'
                      placeholder='Phone Number'
                      name='phone'
                      value={orderData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='input-box'>
                    <span className='details'>Email*</span>
                    <input
                      type='text'
                      placeholder='Email'
                      name='email'
                      value={orderData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='input-box'>
                    <span className='details'>Street Address*</span>
                    <input
                      type='text'
                      placeholder='Street Address'
                      name='address'
                      value={orderData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>

              <div className='checkout-title'>Type</div>
              <div className='type-container'>
                <FaTruck className='type-icon' /> <span>Delivery</span>
              </div>

              <div className='checkout-title'>Payment</div>
              <div className='payment-container'>
                <p>We accept the following payment methods:</p>
                <div className='payment-icon-container'>
                  <FaMoneyBill className='payment-icon' /> <span>Cash</span>
                </div>

                <div className='payment-icon-container'>
                  <FaRegCreditCard className='payment-icon' />{' '}
                  <span>E-Transfer</span>
                </div>
              </div>

              <div className='checkout-title'>Summary</div>
              <div className='summary-container'>
                <table>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                  {cart.map((item) => (
                    <>
                      <tr>
                        <td>
                          <div className='cart-info'>
                            <div>
                              <Link to={`/product/${item.product}`}>
                                <p>{item.name}</p>
                              </Link>
                              <div
                                className='remove-cta'
                                onClick={() => removeProduct(item.product)}
                              >
                                Remove
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <select
                            onChange={(e) =>
                              qtyChangeHandler(item.product, e.target.value)
                            }
                            value={item.qty}
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                          </select>
                        </td>
                        <td>${item.price}</td>
                      </tr>
                    </>
                  ))}
                </table>
                <div className='total-price'>
                  <table>
                    <tr>
                      <td>Total</td>
                      <td>${getCartTotal().toFixed(2)}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className='c-btn-container' onClick={handleSubmit}>
                <div>Place Order</div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout
