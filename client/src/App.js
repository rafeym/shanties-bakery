import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './Pages/NotFound'

import Home from './Pages/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Navbar/Header'
import ScrollToTop from './helper/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
