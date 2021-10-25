import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './Product.scss'

const Product = ({ product }) => {
  const { cloudinary_secure_url, description, name, price, allergens } = product
  const [qty, setQty] = useState(1)
  const qtyPlus = () => {
    setQty(qty + 1)
  }

  const qtyMinus = () => {
    if (qty === 1) {
      return
    } else {
      setQty(qty - 1)
    }
  }
  return (
    <div className='small-container single-product'>
      <div className='row'>
        <div className='col-2'>
          <img src={cloudinary_secure_url} alt={name} width='100%' />
        </div>
        <div className='col-2'>
          <h1>{name}</h1>
          <h4>${price}</h4>

          <div className='select-container'>
            <div className='count'>
              <h3 className='count-title'>Quantity</h3>
              <div className='count-content'>
                <span onClick={qtyMinus}>-</span>
                <span>{qty}</span>
                <span onClick={qtyPlus}>+</span>
              </div>
            </div>
          </div>
          <div className='btn'>Add to Cart</div>
          <div className='prod-details'>
            <p>
              DESC <span className='detail-text'>{description}</span>
            </p>
            <p>
              ALLERGENS <span className='detail-text'>{allergens}</span>
            </p>
            <p>
              SERVING <span className='detail-text'>Dozen</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
