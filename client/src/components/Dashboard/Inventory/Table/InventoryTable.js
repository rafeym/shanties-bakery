import React from 'react'

import { FaTrashAlt, FaRegEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { deleteProductAction } from '../../../../store/actions/productActions'

const InventoryTable = ({ products, count, page, pageLimit }) => {
  const dispatch = useDispatch()

  const deletePost = async (id) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this product?'
    )
    if (confirm) {
      dispatch(deleteProductAction(id))
    }
  }

  return (
    <div className='recent-grid'>
      <div className='recent-orders'>
        <div className='card'>
          <div className='card-header'>
            <h2>Product Inventory</h2>
            <Link to='/create-product' className='order-cta-btn'>
              Create Product
            </Link>
          </div>
          <div className='card-body'>
            <div className='table-responsive'>
              <table width='100%'>
                <thead>
                  <tr>
                    <td>SKU Number</td>
                    <td>Product Name</td>
                    <td>Product Price</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr key={product._id}>
                      <>
                        <td>{product.sku}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                          <Link to='#'>
                            <FaTrashAlt
                              className='table-action-btn'
                              onClick={() => deletePost(product._id)}
                            />
                          </Link>
                          <Link to={`/update-product/${product._id}`}>
                            <FaRegEdit className='table-action-btn' />
                          </Link>
                        </td>
                      </>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryTable
