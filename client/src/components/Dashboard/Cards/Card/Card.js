import React from 'react'

import CountUp from 'react-countup'

const Card = ({ title, count, icon }) => {
  return (
    <div className='card-single'>
      <div>
        <h1>
          <CountUp start={0} end={count} duration={2.5} separator=',' />
        </h1>
        <span>{title}</span>
      </div>
      <div>
        <span>{icon}</span>
      </div>
    </div>
  )
}

export default Card
