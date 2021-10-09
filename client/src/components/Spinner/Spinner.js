import React from 'react'

import ClipLoader from 'react-spinners/ClipLoader'

import './Spinner.scss'

const Spinner = (props) => {
  return (
    <div className='loading-spinner'>
      <ClipLoader color={'#000'} size={100} loading={props.loading} />
    </div>
  )
}

export default Spinner
