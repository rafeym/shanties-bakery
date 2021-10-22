import { createSelector } from 'reselect'

const selectProductsDomain = (state) => state.productReducer || {}

export const selectLoading = createSelector(
  selectProductsDomain,
  (prodReducer) => prodReducer.loading
)

export const selectCount = createSelector(
  selectProductsDomain,
  (prodReducer) => prodReducer.count
)

export const selectPageLimit = createSelector(
  selectProductsDomain,
  (prodReducer) => prodReducer.pageLimit
)

export const selectProducts = createSelector(
  selectProductsDomain,
  (prodReducer) => prodReducer.products
)

export const selectProduct = createSelector(
  selectProductsDomain,
  (prodReducer) => prodReducer.product
)

export const selectAllProducts = createSelector(selectProducts, (products) =>
  Object.keys(products).map((id) => products[id])
)

export const selectProductById = (productId) =>
  createSelector(selectProducts, (products) =>
    products.find((p) => p._id === productId)
  )

export const selectProductIndexById = (productId) =>
  createSelector(selectProducts, (products) =>
    products.findIndex((p) => p._id === productId)
  )
