import React from 'react'

import Card from './Card/Card'

import { FaUser, FaDollarSign, FaList } from 'react-icons/fa'

import './Cards.scss'

const Cards = ({ totalEarnings, totalOrders, totalSubscribers }) => {
  return (
    <div className='d-cards'>
      <Card count={totalOrders} title='Total Orders' icon={<FaList />} />
      <Card
        count={totalSubscribers}
        title='Total Subscribers'
        icon={<FaUser />}
      />
      <Card
        count={totalEarnings}
        title='Total Earnings'
        icon={<FaDollarSign />}
      />
    </div>
  )
}

export default Cards
