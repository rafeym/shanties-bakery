import React from 'react'

import './Newsletter.scss'

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submiting!!')
  }
  return (
    <div className='n-body'>
      <div className='newsletter-container'>
        <div className='newsletter'>
          <h1>Subscribe to our newsletter</h1>
          <p>To stay up to date on new treat boxes & pastries.</p>
          <form className='newsletter-form'>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='email' placeholder='Email Address' />
          </form>
          <input
            type='submit'
            className='n-btn'
            value='Subscribe'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default Newsletter
