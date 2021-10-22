import React from 'react'

import Card from './Card/Card'

import { FaUser, FaDollarSign, FaList } from 'react-icons/fa'

import './Cards.scss'

const Cards = () => {
  return (
    <div className='d-cards'>
      <Card count={100} title='Total Orders' icon={<FaList />} />
      <Card count={100} title='Total Customers' icon={<FaUser />} />
      <Card count={100} title='Total Earnings' icon={<FaDollarSign />} />
    </div>
  )
}

export default Cards
