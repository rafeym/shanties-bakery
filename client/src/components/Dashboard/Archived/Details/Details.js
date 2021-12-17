import React from 'react'

import _ from 'lodash'

import NotFound from '../../NotFound/NotFound'

const Details = ({ order }) => {
  const orderEmpty = _.isEmpty(order)
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
    <>
      {orderEmpty ? (
        <NotFound
          buttonTxt='Go Back'
          text='The order you are looking for does not exist.'
          url='/completed'
        />
      ) : (
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
      )}
    </>
  )
}

export default Details
