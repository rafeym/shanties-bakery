import React, { useEffect } from 'react'

import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { fetchArchivedOrdersAction } from '../../store/actions/orderActions'
import {
  selectArchivedOrdersCount,
  selectLoading,
  selectPageLimit,
  selectArchivedOrders,
} from '../../store/selectors/orderSelector'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Spinner from '../../components/Spinner/Spinner'
import Table from '../../components/Dashboard/Archived/Table/Table'

const Archived = () => {
  const dispatch = useDispatch()

  const archivedOrders = useSelector(selectArchivedOrders)
  const loading = useSelector(selectLoading)
  const count = useSelector(selectArchivedOrdersCount)
  const pageLimit = useSelector(selectPageLimit)

  let { page } = useParams()

  if (page === undefined) {
    page = 1
  }

  useEffect(() => {
    dispatch(fetchArchivedOrdersAction(page))
  }, [dispatch, page])

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <Table
            archivedOrders={archivedOrders}
            count={count}
            page={page}
            pageLimit={pageLimit}
          />
        )}
      </div>
    </>
  )
}

export default Archived
