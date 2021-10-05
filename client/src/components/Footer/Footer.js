import React from 'react'

import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-col'>
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/menu'>Menu</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>FAQ</h4>
            <ul>
              <li>
                <Link to='/faq'>Shipping</Link>
              </li>
              <li>
                <Link to='/faq'>Payment</Link>
              </li>
              <li>
                <Link to='/faq'>Returns</Link>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Contact</h4>
            <ul>
              <li>
                <FaPhoneAlt /> <span>(416) 274-6016</span>
              </li>
              <li>
                <FaEnvelope />{' '}
                <span className='bus-email'>shantiesbakery@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Follow Us</h4>
            <div className='social-links'>
              <a
                href='https://www.facebook.com/shantiesbakery/'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebook className='s-icon' />
              </a>
              <a
                href='https://www.instagram.com/shantiesbakery/?hl=en '
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram className='s-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>&copy;Shantie's Bakery 2021</div>
    </footer>
  )
}

export default Footer
