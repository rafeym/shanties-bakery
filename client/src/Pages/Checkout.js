import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Footer from '../components/Footer/Footer'
import Header from '../components/Navbar/Header'

import { FaTruck, FaMoneyBill, FaRegCreditCard, FaTimes } from 'react-icons/fa'

import './styles/Checkout.scss'
import {
    addProductToCartAction,
    removeProductFromCart,
} from '../store/actions/cartActions'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const { cart } = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    console.log(cart)

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

    return (
        <>
            <Header />
            <div className='checkout-page-wrapper'>
                <div className='checkout-container'>
                    <div className='checkout-title'>Checkout</div>
                    <form className='checkout-form'>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span className='details'>First Name</span>
                                <input type='text' placeholder='First Name' />
                            </div>

                            <div className='input-box'>
                                <span className='details'>Last Name</span>
                                <input type='text' placeholder='Last Name' />
                            </div>

                            <div className='input-box'>
                                <span className='details'>Phone Number</span>
                                <input type='text' placeholder='Phone Number' />
                            </div>

                            <div className='input-box'>
                                <span className='details'>Email</span>
                                <input type='text' placeholder='Email' />
                            </div>

                            <div className='input-box'>
                                <span className='details'>Street Address</span>
                                <input
                                    type='text'
                                    placeholder='Street Address'
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
                            <FaMoneyBill className='payment-icon' />{' '}
                            <span>Cash</span>
                        </div>

                        <div className='payment-icon-container'>
                            <FaRegCreditCard className='payment-icon' />{' '}
                            <span>E-Transfer</span>
                        </div>
                    </div>

                    <div className='checkout-title'>Summary</div>
                    <div className='summary-container'>
                        {cart.map((item) => {
                            return (
                                <>
                                    <div className='cart-item-container'>
                                        <FaTimes
                                            className='cart-item-icon'
                                            onClick={() =>
                                                removeProduct(item.product)
                                            }
                                        />
                                        <Link
                                            className='checkout-cart-item-name'
                                            to={`/product/${item.product}`}
                                        >
                                            <p>{item.name}</p>
                                        </Link>
                                        <input
                                            type='number'
                                            value={item.qty}
                                            onChange={(e) =>
                                                qtyChangeHandler(
                                                    item.product,
                                                    e.target.value
                                                )
                                            }
                                            min={1}
                                        />
                                        <p>${item.price}</p>
                                    </div>
                                    <div className='cart-border' />
                                </>
                            )
                        })}
                        <div className='checkout-total-container'>
                            <p>Order Total: </p>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='c-btn-container'>
                        <div>Place Order</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
