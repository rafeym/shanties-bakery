import React from 'react'

import './Greeting.scss'

const Greeting = ({ greet }) => {
  return (
    <h1 className='greeting'>
      {greet} <span className='wave'>👋</span>
    </h1>
  )
}

export default Greeting
