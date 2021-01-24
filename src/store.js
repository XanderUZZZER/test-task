import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer } from './reducers/productsReducer';
import data from './products.json'
import {
  UAH
} from './constants/productConstants'

const reducer = combineReducers({
  products: productsReducer
})

const savedProducts = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : []

const initialState = {
  products: {
    products: [
      ...JSON.parse(JSON.stringify(data)),
      ...savedProducts
    ],

    filteredProducts: [
      ...JSON.parse(JSON.stringify(data)),
      ...savedProducts
    ],
    currency: UAH,
    sortCriteria: 'DESC'
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;