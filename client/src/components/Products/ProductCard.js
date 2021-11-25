import React from 'react'
import { Link } from 'react-router-dom'

import { FaShoppingBag } from 'react-icons/fa'

import { toast } from 'react-toastify'
import './ProductCard.scss'

import { useDispatch } from 'react-redux'
import { addProductToCartAction } from '../../store/actions/cartActions'

const ProductCard = ({ name, price, img, id, serving }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addProductToCartAction(id, 1))
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
    <div className='product-box'>
      <Link to={`/product/${id}`} className='product-info-image'>
        <img src={img} alt={name} />
      </Link>
      <strong>
        <Link to={`/product/${id}`} className='product-link-name'>
          {name}
        </Link>
      </strong>
      <span className='p-quantity'>{serving}</span>
      <span className='p-price'>${price}</span>
      <div className='cart-btn' onClick={handleAddToCart}>
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
