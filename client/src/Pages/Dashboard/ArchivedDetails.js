import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchArchivedOrderAction } from '../../store/actions/orderActions'
import { selectArchivedOrder } from '../../store/selectors/orderSelector'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Spinner from '../../components/Spinner/Spinner'
import Details from '../../components/Dashboard/Archived/Details/Details'

import { useParams } from 'react-router'

const ArchivedDetails = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { id } = useParams()

  const archivedOrder = useSelector(selectArchivedOrder)

  useEffect(() => {
    async function fetchArchivedOrders() {
      await dispatch(fetchArchivedOrderAction(id))
      setLoading(false)
    }
    fetchArchivedOrders()
  }, [dispatch, id])

  const { order = {} } = archivedOrder

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? <Spinner loading={loading} /> : <Details order={order} />}
      </div>
    </>
  )
}

export default ArchivedDetails
