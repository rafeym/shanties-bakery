import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import {
  archiveOrderAction,
  cancelOrderAction,
  fetchOrderAction,
} from '../../store/actions/orderActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrder } from '../../store/selectors/orderSelector'

import { useParams } from 'react-router'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import OrderDetail from '../../components/Dashboard/Orders/OrderDetail'
import NotFound from '../../components/Dashboard/NotFound/NotFound'

import Spinner from '../../components/Spinner/Spinner'

const OrderDetails = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()

  const order = useSelector(selectOrder)

  useEffect(() => {
    async function fetchOrder() {
      await dispatch(fetchOrderAction(id))
      setLoading(false)
    }
    fetchOrder()
  }, [dispatch, id])

  const archiveOrder = (id) => {
    dispatch(archiveOrderAction(id))
    history.push('/orders')
  }

  const cancelOrder = (id) => {
    dispatch(cancelOrderAction(id))
    history.push('/orders')
  }

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : order === null ? (
          <NotFound
            buttonTxt='Go Back'
            text='The order you are looking for does not exist.'
            url='/orders'
          />
        ) : (
          <OrderDetail
            order={order}
            archiveOrder={archiveOrder}
            cancelOrder={cancelOrder}
          />
        )}
      </div>
    </>
  )
}

export default OrderDetails
