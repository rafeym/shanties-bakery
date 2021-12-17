import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  fetchArchivedOrdersAction,
  fetchCancelledOrdersAction,
  fetchOrdersAction,
} from '../../store/actions/orderActions'
import { getSubscriberListAction } from '../../store/actions/userActions'
import {
  selectArchivedOrders,
  selectLoading,
  selectOrders,
  selectCount,
  selectArchivedOrdersCount,
  selectCancelledOrdersCount,
} from '../../store/selectors/orderSelector'
import { selectUser } from '../../store/selectors/userSelector'
import { selectSubscribers } from '../../store/selectors/userSelector'

import Cards from '../../components/Dashboard/Cards/Cards'
import Charts from '../../components/Dashboard/Charts/Charts'
import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Table from '../../components/Dashboard/Table/Table'
import Spinner from '../../components/Spinner/Spinner'
import Greeting from '../../components/Dashboard/Greeting/Greeting'

const Admin = () => {
  const [greet, setGreet] = useState('')
  const loading = useSelector(selectLoading)
  const orders = useSelector(selectOrders)
  const subscribers = useSelector(selectSubscribers)
  const archivedOrders = useSelector(selectArchivedOrders)
  const user = useSelector(selectUser)

  let page = 1

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrdersAction(page))
  }, [page, dispatch])

  useEffect(() => {
    dispatch(getSubscriberListAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchCancelledOrdersAction(page))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(fetchArchivedOrdersAction(page))
  }, [dispatch, page])

  const totalSales = orders.reduce(
    (curr, prev) => Math.ceil(prev.total + curr),
    0
  )

  const archivedOrdersOrder = archivedOrders.map((order) => order.order)

  const totalEarnings = archivedOrdersOrder.reduce(
    (curr, prev) => Math.ceil(prev.total + curr),
    0
  )

  const activeOrders = useSelector(selectCount)
  const archiveOrders = useSelector(selectArchivedOrdersCount)
  const cnlOrders = useSelector(selectCancelledOrdersCount)

  const totalOrders = archiveOrders
  const totalSubscribers = subscribers.length

  const { name } = user

  useEffect(() => {
    const myDate = new Date()
    let hrs = myDate.getHours()

    if (hrs < 12) setGreet(`Good Morning, ${name}!`)
    else if (hrs >= 12 && hrs <= 17) setGreet(`Good Afternoon, ${name}!`)
    else if (hrs >= 17 && hrs <= 24) setGreet(`Good Evening, ${name}!`)
  }, [name])

  return (
    <>
      <Navigation />
      <div className='d-main'>
        <Greeting greet={greet} />
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <Cards
              activeOrders={activeOrders}
              cnlOrders={cnlOrders}
              totalSales={totalSales}
              totalOrders={totalOrders}
              totalEarnings={totalEarnings}
              totalSubscribers={totalSubscribers}
            />
            <Table orders={orders} button='View All' url='/orders' />
            <Charts
              activeOrders={activeOrders}
              totalOrders={totalOrders}
              cnlOrders={cnlOrders}
            />
          </>
        )}
      </div>
    </>
  )
}

export default Admin
