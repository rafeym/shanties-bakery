import React from 'react'

import _ from 'lodash'

import './OrderDetail.scss'
import NotFound from '../NotFound/NotFound'

const OrderDetail = ({ order, archiveOrder, cancelOrder }) => {
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
    _id,
    orderStatus,
    deliveryStatus,
  } = order

  return (
    <>
      {orderEmpty ? (
        <NotFound
          buttonTxt='Go To Orders'
          text='Unable to find the order your looking for.'
          url='/orders'
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
            <div className='btn-options-container'>
              {orderStatus && deliveryStatus ? (
                <div className='option-btn' onClick={() => archiveOrder(_id)}>
                  Archive Order
                </div>
              ) : null}

              {orderStatus || deliveryStatus ? null : (
                <div className='option-btn' onClick={() => cancelOrder(_id)}>
                  Cancel Order
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderDetail
