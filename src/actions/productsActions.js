import {
  PRODUCT_LIST,
  PRODUCT_FILTER_PRICE,
  PRODUCT_SET_CURRENCY,
  PRODUCT_ADD,
  UAH
} from '../constants/productConstants'
import { v4 as uuidv4 } from 'uuid';

export const getProducts = () => {
  return {
    type: PRODUCT_LIST
  }
}

export const sort = (sortCriteria) => (dispatch, getState) => {
  dispatch({
    type: `PRODUCT_SORT_${sortCriteria?.toString().toUpperCase() || getState().products.sortCriteria}`,
  })
}

export const filterPrice = (min, max) => dispatch => {
  dispatch({
    type: PRODUCT_FILTER_PRICE,
    payload: {
      min,
      max
    }
  })
  dispatch(sort())
}

export const setCurrency = (currency = UAH) => dispatch => {
  dispatch({
    type: PRODUCT_SET_CURRENCY,
    payload: currency
  })
}

export const addProduct = (product) => (dispatch, getState) => {
  product.id = uuidv4()
  const savedProducts = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : []
  savedProducts.push(product)
  localStorage['products'] = JSON.stringify(savedProducts)
  dispatch({
    type: PRODUCT_ADD,
    payload: product
  })
}