import React from 'react'

import './OrderDetail.scss'

const OrderDetail = ({ order }) => {
  const {
    fname,
    lname,
    email,
    address,
    phone,
    orderNumber,
    total,
    items = [],
  } = order

  return (
    <div className='order-detail-container'>
      <div className='detail-card'>
        <h3>Order# {orderNumber}</h3>
        <p>
          Name: {fname} {lname}
        </p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>
        <p>Order Summary: </p>
        {items.map((item, i) => (
          <p key={i}>
            {item.name}({item.qty}) - ${item.price}
          </p>
        ))}

        <p>Order Total: ${total}</p>
      </div>
    </div>
  )
}

export default OrderDetail
