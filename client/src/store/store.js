import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]

const cartLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

const INIT_STATE = {
  cartReducer: {
    cart: cartLocalStorage,
  },
}

const store = createStore(
  rootReducer,
  INIT_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
