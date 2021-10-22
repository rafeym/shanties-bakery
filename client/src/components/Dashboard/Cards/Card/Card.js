import React from 'react'

const Card = ({ title, count, icon }) => {
  return (
    <div className='card-single'>
      <div>
        <h1>{count}</h1>
        <span>{title}</span>
      </div>
      <div>
        <span>{icon}</span>
      </div>
    </div>
  )
}

export default Card
