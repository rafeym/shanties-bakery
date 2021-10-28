import React from 'react'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'

const Info = () => {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: 'calc(100vh - 211px - 58px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>FAQ Page</h3>
      </div>
      <Footer />
    </>
  )
}

export default Info
