import { ADD_TO_CART, REMOVE_FROM_CART } from '../types'

const initState = {
  cart: [],
}

export const cartReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART:
      const item = payload
      const existItem = state.cart.find((x) => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((x) => x.product !== payload),
      }
    default:
      return state
  }
}
