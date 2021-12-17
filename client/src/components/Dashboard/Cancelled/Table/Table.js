import React from 'react'

import Pagination from '../../../Pagination/Pagination'

import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Table = ({ cancelledOrders, page, count, pageLimit }) => {
  return (
    <>
      <div className='recent-grid'>
        <div className='recent-orders'>
          <div className='card'>
            <div className='card-header'>
              <h2>Cancelled Orders</h2>
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table width='100%'>
                  <thead>
                    <tr>
                      <td>Order Number</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cancelledOrders.map((order) => (
                      <tr key={order._id}>
                        <td>{order.order.orderNumber}</td>
                        <td>
                          <Link to={`/cancelled/order-details/${order._id}`}>
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
        url='cancelled'
      />
    </>
  )
}

export default Table
