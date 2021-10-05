import React from 'react'

import { Link } from 'react-router-dom'

import './Hero.scss'

import cookies from '../../static/cookies.png'

const Hero = () => {
  return (
    <section className='hero-banner'>
      {/* Background */}
      <img src={cookies} className='bg-1' alt='' />
      <img src={cookies} className='bg-2' alt='' />
      {/* <img src={cookies} className='bg-3' alt='' /> */}

      {/* Text Area */}
      <div className='hero-banner-text'>
        <h1>Sweets & Pastries that you crave!</h1>
        <strong>#WeDeliver</strong>

        {/* CTA Button */}
        <Link to='/menu' className='cta-btn'>
          Browse Bakery
        </Link>
      </div>
    </section>
  )
}

export default Hero
