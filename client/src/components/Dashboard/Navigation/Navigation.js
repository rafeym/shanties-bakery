import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { logoutAction } from '../../../store/actions/userActions'
import { useDispatch } from 'react-redux'

import {
  FaBars,
  FaCheckSquare,
  FaDollyFlatbed,
  FaHome,
  FaList,
  FaSignOutAlt,
  FaTimes,
} from 'react-icons/fa'
import { IconContext } from 'react-icons/'

import './Navigation.scss'

const Navigation = () => {
  const dispatch = useDispatch()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='dashboard-navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'd-nav-menu active' : 'd-nav-menu'}>
          <ul className='d-nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaTimes />
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/dashboard'>
                <FaHome />
                <span className='nav-item-logo'>Home</span>
              </Link>
            </li>

            <li className='nav-text'>
              <Link to='/orders'>
                <FaList />
                <span className='nav-item-logo'>Orders</span>
              </Link>
            </li>

            <li className='nav-text'>
              <Link to='/completed'>
                <FaCheckSquare />
                <span className='nav-item-logo'>Completed</span>
              </Link>
            </li>

            <li className='nav-text'>
              <Link to='/cancelled'>
                <FaTimes />
                <span className='nav-item-logo'>Cancelled</span>
              </Link>
            </li>

            <li className='nav-text'>
              <Link to='/inventory'>
                <FaDollyFlatbed />
                <span className='nav-item-logo'>Inventory</span>
              </Link>
            </li>

            <li className='nav-text'>
              <Link to='#'>
                <FaSignOutAlt />
                <span
                  className='nav-item-logo'
                  onClick={() => dispatch(logoutAction())}
                >
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navigation
