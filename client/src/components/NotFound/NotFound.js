import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.scss'

const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <Link to='/' className='cta-btn'>
        Go To Home
      </Link>
    </div>
  )
}

export default NotFound
