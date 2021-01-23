import {
  PRODUCT_LIST,
  PRODUCT_SORT_DESC,
  PRODUCT_SORT_ASC,
  PRODUCT_SORT_NAME,
  PRODUCT_FILTER_PRICE
} from '../constants/productConstants'
import data from '../products.json'

export const getProducts = () => {
  const products = JSON.parse(JSON.stringify(data))
  return {
    type: PRODUCT_LIST,
    payload: products
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
  dispatch(sortDesc())
}