import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='navbar'>
        <div className='nav-container'>
          <h1 className='nav-logo'>Shantie's Bakery</h1>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/menu' className='nav-links' onClick={handleClick}>
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={handleClick}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cart' className='nav-links' onClick={handleClick}>
                Cart
              </Link>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  )
}

export default Navbar
