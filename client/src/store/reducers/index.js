import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { productReducer } from './productReducer'
import { cartReducer } from './cartReducer'
import { orderReducer } from './orderReducer'

export default combineReducers({
  userReducer,
  productReducer,
  cartReducer,
  orderReducer,
})
