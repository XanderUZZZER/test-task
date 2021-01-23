import {
  PRODUCT_SORT_DESC,
  PRODUCT_SORT_ASC,
  PRODUCT_SORT_NAME
} from '../constants/productConstants'

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_SORT_DESC:
      return [...state.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))]
    case PRODUCT_SORT_ASC:
      return [...state.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))]
    case PRODUCT_SORT_NAME:
      return [...state.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0
      })
      ]
    default:
      return state
  }
}