import React from 'react'

import Navigation from '../../components/Dashboard/Navigation/Navigation'

const Inventory = () => {
  return (
    <>
      <Navigation />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h3>Inventory Page</h3>
      </div>
    </>
  )
}

export default Inventory
