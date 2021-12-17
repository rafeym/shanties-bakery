import React from 'react'

import Card from './Card/Card'

import { FaUser, FaDollarSign, FaList, FaTimes } from 'react-icons/fa'

import './Cards.scss'

const Cards = ({
  totalSales,
  activeOrders,
  cnlOrders,
  totalOrders,
  totalEarnings,
  totalSubscribers,
}) => {
  return (
    <div className='d-cards'>
      <Card count={activeOrders} title='Active Orders' icon={<FaList />} />
      <Card count={totalOrders} title='Completed Orders' icon={<FaList />} />
      <Card count={cnlOrders} title='Cancelled Orders' icon={<FaTimes />} />

      <Card count={totalSales} title='Total Sale' icon={<FaDollarSign />} />
      <Card
        count={totalEarnings}
        title='Total Earnings'
        icon={<FaDollarSign />}
      />
      <Card
        count={totalSubscribers}
        title='Total Subscribers'
        icon={<FaUser />}
      />
    </div>
  )
}

export default Cards
