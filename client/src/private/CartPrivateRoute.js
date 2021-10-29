import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const CartPrivateRoute = (props) => {
    const { cart } = useSelector((state) => state.cartReducer)

    return cart.length !== 0 ? (
        <Route
            path={props.path}
            exact={props.exact}
            component={props.component}
        />
    ) : (
        <Redirect to='/cart' />
    )
}

export default CartPrivateRoute
