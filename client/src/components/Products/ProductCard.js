import React from 'react'
import { Link } from 'react-router-dom'

import { FaShoppingBag } from 'react-icons/fa'

import './ProductCard.scss'

import { useDispatch } from 'react-redux'
import { addProductToCartAction } from '../../store/actions/cartActions'

const ProductCard = ({ name, price, img, id }) => {
  const dispatch = useDispatch()

  return (
    <div className='product-box'>
      <Link to={`/product/${id}`} className='product-info-image'>
        <img src={img} alt={name} />
      </Link>
      <strong>
        <Link to={`/product/${id}`} className='product-link-name'>
          {name}
        </Link>
      </strong>
      <span className='p-quantity'>Dozen</span>
      <span className='p-price'>${price}</span>
      <div
        className='cart-btn'
        onClick={() => dispatch(addProductToCartAction(id, 1))}
      >
        <FaShoppingBag className='cart-btn-icon' />
        Add To Cart
      </div>
      <Link to={`/product/${id}`} className='view-btn'>
        View Product
      </Link>
    </div>
  )
}

export default ProductCard
