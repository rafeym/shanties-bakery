import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addProductToCartAction } from '../../store/actions/cartActions'

import { toast } from 'react-toastify'
import './Product.scss'

const Product = ({ product, history }) => {
  const { cloudinary_secure_url, description, name, price, allergens, _id } =
    product
  const [qty, setQty] = useState(1)
  const qtyPlus = () => {
    if (qty === 10) {
      return
    } else {
      setQty(qty + 1)
    }
  }

  const qtyMinus = () => {
    if (qty === 1) {
      return
    } else {
      setQty(qty - 1)
    }
  }
  const dispatch = useDispatch()

  const addToCartHandler = (e) => {
    dispatch(addProductToCartAction(_id, qty))
    toast.success('Item added to cart!', {
      position: 'bottom-center',
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    })
  }

  return (
    <div className='product-detail-container'>
      <div className='prod-details'>
        <div className='big-img'>
          <img src={cloudinary_secure_url} alt={name} />
        </div>

        <div className='prod-details-box'>
          <div className='details-row'>
            <h2>{name}</h2>
            <span>${price}</span>
          </div>

          <h3>Description</h3>
          <p>{description}</p>
          <h3>Allergens</h3>
          <p>{allergens}</p>
          <h3>Serving</h3>
          <p>Dozen</p>
          <div className='quantity-section'>
            <div className='qty-container'>
              <div className='count'>
                <div className='count-content'>
                  <span onClick={qtyMinus}>-</span>
                  <span>{qty}</span>
                  <span onClick={qtyPlus}>+</span>
                </div>
              </div>
            </div>
            <div className='btn' onClick={addToCartHandler}>
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
