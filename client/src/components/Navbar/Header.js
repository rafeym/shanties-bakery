import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'

import './Header.scss'
import { useSelector } from 'react-redux'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

  const { cart } = useSelector((state) => state.cartReducer)

  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  return (
    <nav className='navigation'>
      {/* Logo */}
      <p className='logo'>
        <span>S</span>hantie's
      </p>

      {/* Mobile Nav */}
      <div className='mobile-icon' onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>

      {/* menu */}
      <ul className={click ? 'menu active' : 'menu'}>
        <li>
          <Link to='/' className='nav-link' onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/menu' className='nav-link' onClick={handleClick}>
            Menu
          </Link>
        </li>
        <li>
          <Link to='/faq' className='nav-link' onClick={handleClick}>
            FAQ
          </Link>
        </li>
      </ul>

      {/* Right Nav */}
      <div className='right-nav'>
        <Link to='/cart' className='icon-container'>
          <FaShoppingCart className='icon' /> <span>{getCartCount()}</span>
        </Link>
      </div>
    </nav>
  )
}

export default Header
