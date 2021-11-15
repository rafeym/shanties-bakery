import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchOrdersAction } from '../../store/actions/orderActions'
import { getSubscriberListAction } from '../../store/actions/userActions'
import {
  selectLoading,
  selectOrders,
} from '../../store/selectors/orderSelector'
import { selectSubscribers } from '../../store/selectors/userSelector'

import Cards from '../../components/Dashboard/Cards/Cards'
import Charts from '../../components/Dashboard/Charts/Charts'
import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Table from '../../components/Dashboard/Table/Table'
import Spinner from '../../components/Spinner/Spinner'

const Admin = () => {
  const loading = useSelector(selectLoading)
  const orders = useSelector(selectOrders)
  const subscribers = useSelector(selectSubscribers)

  let page = 1

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrdersAction(page))
  }, [page, dispatch])

  useEffect(() => {
    dispatch(getSubscriberListAction())
  }, [dispatch])

  const totalEarnings = orders.reduce(
    (curr, prev) => Math.ceil(prev.total + curr),
    0
  )
  const totalOrders = orders.length

  const totalSubscribers = subscribers.length

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <Cards
              totalEarnings={totalEarnings}
              totalOrders={totalOrders}
              totalSubscribers={totalSubscribers}
            />
            <Table orders={orders} />
            <Charts
              totalSubscribers={totalSubscribers}
              totalEarnings={totalEarnings}
              totalOrders={totalOrders}
            />
          </>
        )}
      </div>
    </>
  )
}

export default Admin
