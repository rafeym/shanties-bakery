import React, { useState } from 'react'

import { FaAngleDown } from 'react-icons/fa'
import './Info.scss'

const Info = () => {
  const [click, setClick] = useState(false)
  const [click1, setClick1] = useState(false)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)

  return (
    <section className='info-section'>
      <h2 className='info-title'>FAQs</h2>
      <div className={click ? 'faq active' : 'faq'}>
        <div className='question'>
          <h3 onClick={() => setClick(!click)}>Shipping</h3>
          <FaAngleDown onClick={() => setClick(!click)} />
        </div>
        <div className='answer'>
          <p>
            We offer delivery to our customers located in the GTA. Any inquries
            on deliveries outside of the GTA can be made by contacting us via
            email at shantiesbakery@gmail.com. Deliveries are on Saturday's and
            Sunday's unless contacted for special delivery dates. In order to
            recieve your order the same weekend, all orders must be placed
            before Thursday. Orders placed after will be delviered the following
            weekend.
          </p>
        </div>
      </div>

      <div className={click1 ? 'faq active' : 'faq'}>
        <div className='question'>
          <h3 onClick={() => setClick1(!click1)}>Payment</h3>
          <FaAngleDown onClick={() => setClick1(!click1)} />
        </div>
        <div className='answer'>
          <p>
            We currently accept cash and e-transfer payments. Cash must be paid
            upon delivery of order. E-transfer payments is to be paid upon order
            confirmation. Any other payment inquiries can be made via email to
            shantiesbakery@gmail.com.
          </p>
        </div>
      </div>

      <div className={click2 ? 'faq active' : 'faq'}>
        <div className='question'>
          <h3 onClick={() => setClick2(!click2)}>Returns</h3>
          <FaAngleDown onClick={() => setClick2(!click2)} />
        </div>
        <div className='answer'>
          <p>
            We do not accept returns. If there is an issue with your order,
            please contact us via email at shantiesbakery@gmail.com for a refund
            or new order. When contacting please include your name, order number
            and your order concern. We are dedicated to providing fresh quality
            pastries and ensuring customer satisfaction!
          </p>
        </div>
      </div>

      <div className={click3 ? 'faq active' : 'faq'}>
        <div className='question'>
          <h3 onClick={() => setClick3(!click3)}>Cancellations</h3>
          <FaAngleDown onClick={() => setClick3(!click3)} />
        </div>
        <div className='answer'>
          <p>
            If you would like to cancel your order, please contact us via email
            at shantiesbakery@gmail.com with your name and order number to
            cancel.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Info
