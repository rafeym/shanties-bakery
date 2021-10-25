import React from 'react'

import './CartTable.scss'

import img1 from '../../static/product/img1.JPG'

const CartTable = () => {
  return (
    <div className='c-small-container cart-container'>
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className='cart-info'>
              <img src={img1} alt='' />
              <div>
                <p>Product Name</p>
                <small>Price: $50.00</small>
                <br />
                <a href=''>Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type='number' value={1} />
          </td>
          <td>$50.00</td>
        </tr>
      </table>

      <div className='total-price'>
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$200.00</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$230.00</td>
          </tr>
        </table>
      </div>
      <div className='checkout-btn-container'>
        <div className='checkout-btn'>Proceed to Checkout</div>
      </div>
    </div>
  )
}

export default CartTable
