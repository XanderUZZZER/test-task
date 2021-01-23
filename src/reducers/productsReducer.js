import {
  PRODUCT_LIST,
  PRODUCT_SORT_DESC,
  PRODUCT_SORT_ASC,
  PRODUCT_SORT_NAME,
  PRODUCT_FILTER_PRICE,
  PRODUCT_SET_CURRENCY,
  PRODUCT_ADD
} from '../constants/productConstants'

export const productsReducer = (state = { products: [], filteredProducts: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return { ...state, filteredProducts: [...state.filteredProducts.map(product => { return { ...product, price: state.products.find(prod => prod.id === product.id).price * state.currency } })] }
    case PRODUCT_SORT_DESC:
      return { ...state, filteredProducts: [...state.filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))] }
    case PRODUCT_SORT_ASC:
      return { ...state, filteredProducts: [...state.filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))] }
    case PRODUCT_SORT_NAME:
      return {
        ...state, filteredProducts: [...state.filteredProducts.sort((a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0
        })]
      }
    case PRODUCT_FILTER_PRICE:
      return { ...state, filteredProducts: state.products.filter(product => product.price >= action.payload.min && product.price <= action.payload.max) }
    case PRODUCT_SET_CURRENCY:
      return { ...state, currency: action.payload }
    case PRODUCT_ADD:
      console.log(state.products);
      return { ...state, products: [...state.products, action.payload], filteredProducts: [...state.filteredProducts, action.payload] }
    default:
      return state
  }
}