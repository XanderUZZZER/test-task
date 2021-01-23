import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer } from './reducers/productsReducer';
import data from './products.json'

const reducer = combineReducers({
  products: productsReducer
})

const initialState = {
  products: {
    products: [...JSON.parse(JSON.stringify(data))],
    filteredProducts: JSON.parse(JSON.stringify(data))
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;