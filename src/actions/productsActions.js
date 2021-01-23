import {
  PRODUCT_SORT_DESC,
  PRODUCT_SORT_ASC,
  PRODUCT_SORT_NAME
} from '../constants/productConstants'

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