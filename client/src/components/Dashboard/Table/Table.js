import React from 'react'

import { Link } from 'react-router-dom'

import './Table.scss'

const Table = () => {
  return (
    <div className='recent-grid'>
      <div className='recent-orders'>
        <div className='card'>
          <div className='card-header'>
            <h2>Recent Orders</h2>
            <Link to='/orders' className='order-cta-btn'>
              See All
            </Link>
          </div>
          <div className='card-body'>
            <div className='table-responsive'>
              <table width='100%'>
                <thead>
                  <tr>
                    <td>Order Number</td>
                    <td>Order Total</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {/* API FETCH */}
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status not-complete'></span>
                      Not Complete
                    </td>
                  </tr>

                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status complete'></span>
                      Complete
                    </td>
                  </tr>
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status complete'></span>
                      Complete
                    </td>
                  </tr>
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status not-complete'></span>
                      Complete
                    </td>
                  </tr>
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status not-complete'></span>
                      Complete
                    </td>
                  </tr>
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status not-complete'></span>
                      Complete
                    </td>
                  </tr>
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status not-complete'></span>
                      Complete
                    </td>
                  </tr>
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status not-complete'></span>
                      Complete
                    </td>
                  </tr>
                  <tr>
                    <td>b1276lakjhdf8321ba</td>
                    <td>$19.99</td>
                    <td>
                      <span className='status not-complete'></span>
                      Complete
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
