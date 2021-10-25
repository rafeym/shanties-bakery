import React from 'react'
import { Link } from 'react-router-dom'

import { FaShoppingBag } from 'react-icons/fa'

import './ProductCard.scss'

const ProductCard = ({ name, price, img, id }) => {
  return (
    <div className='product-box'>
      <img src={img} alt='' />
      <strong>{name}</strong>
      <span className='p-quantity'>Dozen</span>
      <span className='p-price'>${price}</span>
      <div className='cart-btn'>
        <FaShoppingBag className='cart-btn-icon' /> Add To Cart
      </div>
      <Link to={`/product/${id}`} className='view-btn'>
        View Product
      </Link>
    </div>
  )
}

export default ProductCard
