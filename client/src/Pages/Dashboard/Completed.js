import React from 'react'

import Navigation from '../../components/Dashboard/Navigation/Navigation'

const Completed = () => {
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
        <h3>Completed Orders Page</h3>
      </div>
    </>
  )
}

export default Completed
