import React from 'react'

import './CartTable.scss'

import { Link } from 'react-router-dom'

const CartTable = ({ cart, qtyChangeHandler, removeProduct, getCartTotal }) => {
    return (
        <div className='c-small-container cart-container'>
            {cart.length === 0 ? (
                <div className='empty-cart-title'>
                    <h2>Your cart is empty</h2>{' '}
                    <Link className='empty-cart-btn' to='/menu'>
                        Go back
                    </Link>
                </div>
            ) : (
                <>
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
                                            <Link
                                                to={`/product/${item.product}`}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                            </Link>
                                            <div>
                                                <p>{item.name}</p>
                                                <small>
                                                    Price: ${item.price}
                                                </small>
                                                <br />
                                                <div
                                                    className='remove-cta'
                                                    onClick={() =>
                                                        removeProduct(
                                                            item.product
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            type='number'
                                            min={1}
                                            value={item.qty}
                                            onChange={(e) =>
                                                qtyChangeHandler(
                                                    item.product,
                                                    e.target.value
                                                )
                                            }
                                        />
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
                    <div className='checkout-btn-container'>
                        <Link to='/checkout' className='checkout-btn'>
                            Proceed to Checkout
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartTable
