import {
  PRODUCT_LIST,
  PRODUCT_SORT_DESC,
  PRODUCT_SORT_ASC,
  PRODUCT_SORT_NAME,
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

export const sortDesc = () => {
  return {
    type: PRODUCT_SORT_DESC,
  }
}

export const sortAsc = () => {
  return {
    type: PRODUCT_SORT_ASC,
  }
}

export const sortName = () => {
  return {
    type: PRODUCT_SORT_NAME,
  }
}

export const filterPrice = (min, max) => dispatch => {
  dispatch({
    type: PRODUCT_FILTER_PRICE,
    payload: {
      min,
      max
    }
  })
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