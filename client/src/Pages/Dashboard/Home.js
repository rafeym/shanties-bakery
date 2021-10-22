import React from 'react'
import Cards from '../../components/Dashboard/Cards/Cards'
import Charts from '../../components/Dashboard/Charts/Charts'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Table from '../../components/Dashboard/Table/Table'

const Admin = () => {
  return (
    <>
      <Navigation />
      <div className='d-main'>
        <Cards />
        <Table />
        <Charts />
      </div>
    </>
  )
}

export default Admin
