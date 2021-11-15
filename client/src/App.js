import React from 'react'

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
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'

import Admin from './Pages/Dashboard/Home'
import Orders from './Pages/Dashboard/Orders'
import Completed from './Pages/Dashboard/Completed'
import Inventory from './Pages/Dashboard/Inventory'
import CreateProduct from './Pages/Dashboard/CreateProduct'
import UpdateProduct from './Pages/Dashboard/UpdateProduct'
import UpdateOrder from './Pages/Dashboard/UpdateOrder'
import UpdateDelivery from './Pages/Dashboard/UpdateDelivery'
import OrderDetails from './Pages/Dashboard/OrderDetails'

import ScrollToTop from './helper/ScrollToTop'
import { ToastContainer } from 'react-toastify'

import PrivateRoute from './private/PrivateRoute'
import RouteLinks from './private/RouteLinks'
import CartPrivateRoute from './private/CartPrivateRoute'

import setAuthToken from './helper/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ToastContainer />
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu/:page?' component={Menu} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/faq' component={Info} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/contact' component={Contact} />
            <RouteLinks path='/login' exact component={Login} />
            <CartPrivateRoute path='/checkout' exact component={Checkout} />
            <PrivateRoute path='/dashboard' exact component={Admin} />
            <PrivateRoute path='/orders/:page?' exact component={Orders} />
            <PrivateRoute
              path='/orders/update-order-status/:id'
              exact
              component={UpdateOrder}
            />
            <PrivateRoute
              path='/orders/update-delivery-status/:id'
              exact
              component={UpdateDelivery}
            />
            <PrivateRoute
              path='/orders/order-details/:id'
              exact
              component={OrderDetails}
            />
            <PrivateRoute path='/completed' exact component={Completed} />
            <PrivateRoute
              path='/inventory/:page?'
              exact
              component={Inventory}
            />
            <PrivateRoute
              path='/create-product'
              exact
              component={CreateProduct}
            />
            <PrivateRoute
              path='/update-product/:id'
              exact
              component={UpdateProduct}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}

export default App
