import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import NotFound from './Pages/NotFound'

import Home from './Pages/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
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
