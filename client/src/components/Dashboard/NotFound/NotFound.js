import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({ url, buttonTxt, text }) => {
  return (
    <div className='notFoundContainer'>
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>{text}</p>
      <Link to={url} className='cta-btn'>
        {buttonTxt}
      </Link>
    </div>
  )
}

export default NotFound
