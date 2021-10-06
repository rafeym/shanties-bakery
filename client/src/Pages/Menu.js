import React from 'react'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'

const Menu = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h3>Menu Page</h3>
      </div>
      <Footer />
    </>
  )
}

export default Menu
