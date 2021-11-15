import React from 'react'
import { FaEye, FaRegEdit, FaTruck } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import Pagination from '../../Pagination/Pagination'

import './Table.scss'

const Table = ({ orders, count, page, pageLimit }) => {
  return (
    <>
      <div className='recent-grid'>
        <div className='recent-orders'>
          <div className='card'>
            <div className='card-header'>
              <h2>Recent Orders</h2>
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table width='100%'>
                  <thead>
                    <tr>
                      <td>Order Number</td>
                      <td>Order Total</td>
                      <td>Order Status</td>
                      <td>Delivery Status</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order.orderNumber}</td>
                        <td>${order.total}</td>
                        <td>
                          <span
                            className={
                              order.orderStatus
                                ? 'status complete'
                                : 'status not-complete'
                            }
                          ></span>
                          {order.orderStatus ? 'Complete' : 'Not Complete'}
                        </td>
                        <td>
                          <span
                            className={
                              order.deliveryStatus
                                ? 'status complete'
                                : 'status not-complete'
                            }
                          ></span>
                          {order.deliveryStatus ? 'Delivered' : 'Not Delivered'}
                        </td>
                        <td>
                          <Link to={`/orders/update-order-status/${order._id}`}>
                            <FaRegEdit className='table-action-btn' />
                          </Link>
                          <Link
                            to={`/orders/update-delivery-status/${order._id}`}
                          >
                            <FaTruck className='table-action-btn' />
                          </Link>
                          <Link to={`/orders/order-details/${order._id}`}>
                            <FaEye className='table-action-btn' />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        page={page}
        count={count}
        pageLimit={pageLimit}
        url='orders'
      />
    </>
  )
}

export default Table
