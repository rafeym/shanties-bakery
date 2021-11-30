import React, { useState } from 'react'

import { FaAngleDown } from 'react-icons/fa'

import './Contact.scss'

const Contact = () => {
  const [click, setClick] = useState(false)
  const [click1, setClick1] = useState(false)
  return (
    <section className='contact-container'>
      <h2>Contact</h2>
      <div className={click ? 'contact-option active' : 'contact-option'}>
        <div className='contact-option-title'>
          <h3 onClick={() => setClick(!click)}>Email</h3>
          <FaAngleDown onClick={() => setClick(!click)} />
        </div>
        <div className='contact-option-info'>
          <p className='contact-info-p'>shantiesbakery@gmail.com</p>
        </div>
      </div>

      <div className={click1 ? 'contact-option active' : 'contact-option'}>
        <div className='contact-option-title'>
          <h3 onClick={() => setClick1(!click1)}>Phone</h3>
          <FaAngleDown onClick={() => setClick1(!click1)} />
        </div>
        <div className='contact-option-info'>
          <p className='contact-info-p'>(416) 274-6016</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
