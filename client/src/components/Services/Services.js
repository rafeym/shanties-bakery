import React from 'react'

import clock from '../../static/clock.png'
import truck from '../../static/delivery.png'
import pin from '../../static/pin.png'

import './Services.scss'

const Services = () => {
  return (
    <>
      <div className='s-heading'>
        <h1>How We Operate</h1>
        <p>We Provide The Best Services For Our Customers.</p>
      </div>
      <div className='box-area'>
        <div className='single-box'>
          <div className='img-area'>
            <img src={clock} alt='clock' className='services-img' />
          </div>
          <div className='img-text'>
            <span className='header-text'>Freshly Baked</span>
            <p>
              Flavour and freshness is important to us at Shantie's Bakery. To
              ensure freshness and the most flavour, we bake our pastries up to
              one day of delivery.
            </p>
          </div>
        </div>

        <div className='single-box'>
          <div className='img-area'>
            <img src={truck} alt='truck' className='services-img' />
          </div>
          <div className='img-text'>
            <span className='header-text'>Free Delivery</span>
            <p>
              Located in Scarborough, Ontario, we offer free shipping to all of
              our customers in the GTA. Just sit back and relax whilst waiting
              for your sweet treats.
            </p>
          </div>
        </div>

        <div className='single-box'>
          <div className='img-area'>
            <img src={pin} alt='pin' className='services-img' />
          </div>
          <div className='img-text'>
            <span className='header-text'>Locally Operated</span>
            <p>
              All of our goodies are made locally in the GTA. Enjoy some
              pastries and support a local business when ordering from Shantie's
              Bakery.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
