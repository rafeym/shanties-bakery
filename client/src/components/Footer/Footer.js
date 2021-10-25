import React from 'react'

import { FaFacebook, FaInstagram } from 'react-icons/fa'
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
                <Link className='f-link' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='f-link' to='/menu'>
                  Menu
                </Link>
              </li>
              <li>
                <Link className='f-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>FAQ</h4>
            <ul>
              <li>
                <Link className='f-link' to='/faq'>
                  Shipping
                </Link>
              </li>
              <li>
                <Link className='f-link' to='/faq'>
                  Payment
                </Link>
              </li>
              <li>
                <Link className='f-link' to='/faq'>
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Contact</h4>
            <ul>
              <li>
                <span>(416) 274-6016</span>
              </li>
              <li>
                <span>shantiesbakery@gmail.com</span>
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
    </footer>
  )
}

export default Footer
