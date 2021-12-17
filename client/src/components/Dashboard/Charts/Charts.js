import React from 'react'

import Chart from 'react-apexcharts'

import './Charts.scss'

const Charts = ({ totalOrders, cnlOrders, activeOrders }) => {
  const ordersState = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: ['Active Orders', 'Total Orders', 'Cancelled Orders'],
      },
    },
    series: [
      {
        name: 'Active Orders',
        data: [activeOrders],
      },
      {
        name: 'Total Orders',
        data: [totalOrders],
      },
      {
        name: 'Cancelled Orders',
        data: [cnlOrders],
      },
    ],
  }

  return (
    <div className='charts-grid'>
      <div className='charts'>
        <div className='chart-container'>
          <Chart
            className='chart-style'
            options={ordersState.options}
            series={ordersState.series}
            type='bar'
          />
        </div>
      </div>
    </div>
  )
}

export default Charts
