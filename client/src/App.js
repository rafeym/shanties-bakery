import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store'

import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Info from './Pages/Info'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'

import Admin from './Pages/Dashboard/Home'
import Orders from './Pages/Dashboard/Orders'
import Completed from './Pages/Dashboard/Completed'
import Inventory from './Pages/Dashboard/Inventory'

import ScrollToTop from './helper/ScrollToTop'
import { ToastContainer } from 'react-toastify'

import PrivateRoute from './private/PrivateRoute'
import RouteLinks from './private/RouteLinks'

import setAuthToken from './helper/setAuthToken'
import { loadUserAction } from './store/actions/userActions'
import { SET_LOADING } from './store/types'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    if (localStorage.token !== null) {
      store.dispatch({ type: SET_LOADING })
      store.dispatch(loadUserAction())
    }
  }, [])
  return (
    <>
      <Provider store={store}>
        <Router>
          <ToastContainer />
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/faq' component={Info} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/contact' component={Contact} />
            <RouteLinks path='/login' exact component={Login} />
            <PrivateRoute path='/dashboard' exact component={Admin} />
            <PrivateRoute path='/orders' exact component={Orders} />
            <PrivateRoute path='/completed' exact component={Completed} />
            <PrivateRoute path='/inventory' exact component={Inventory} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}

export default App
