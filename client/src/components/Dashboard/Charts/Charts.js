import React from 'react'

import Chart from 'react-apexcharts'

import './Charts.scss'

const Charts = ({ totalSubscribers, totalEarnings }) => {
  const earningState = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: ['Earnings'],
      },
    },
    series: [
      {
        name: 'value',
        data: [totalEarnings],
      },
    ],
  }

  const subState = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: ['Subscribers'],
      },
    },
    series: [
      {
        name: 'value',
        data: [totalSubscribers],
      },
    ],
  }

  return (
    <div className='charts-grid'>
      <div className='charts'>
        <div className='chart-container'>
          <Chart
            className='chart-style'
            options={subState.options}
            series={subState.series}
            type='bar'
          />
        </div>
      </div>

      <div className='charts'>
        <div className='chart-container'>
          <Chart
            className='chart-style'
            options={earningState.options}
            series={earningState.series}
            type='bar'
          />
        </div>
      </div>
    </div>
  )
}

export default Charts
