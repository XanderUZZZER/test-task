import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer } from './reducers/productsReducer';

const reducer = combineReducers({
  products: productsReducer
})

const initialState = {
  products: [
    {
      "id": 0,
      "name": 'Samsung Galaxy S20',
      "price": 19999,
      "image": "1.jpg",
      "description": "Measured diagonally, Galaxy S20 FE 5G’s screen size is 6.5” in the full rectangle and 6.4” with accounting for the rounded corners; Galaxy S20 5G's screen size is 6.2\" in the full rectangle and 6.1\" with accounting for the rounded corners; Galaxy S20+ 5G's screen size is 6.7\" in the full rectangle and 6.5\" with accounting for the rounded corners; and Galaxy S20 Ultra 5G's screen size is 6.9\" in the full rectangle and 6.7\" with accounting for the rounded corners; actual viewable area is less due to the rounded corners and camera hole."
    },
    {
      "id": 1,
      "name": 'Apple iPhone 12',
      "price": 29999,
      "image": "2.jpg",
      "description": "The iPhone 12 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. "
    },
    {
      "id": 2,
      "name": 'Redmi Note 8 Pro',
      "price": 6499,
      "image": "3.jpg",
      "description": "25 times of pixels of the display. Zoom in for more details."
    },
    {
      "id": 3,
      "name": 'SAMSUNG Galaxy A51',
      "price": 8199,
      "image": "4.jpg",
      "description": "How many of us are you looking for a smart phone? Great display, low battery, quick performance of the camera? Todi you can make fun of it - you know the most beautiful version of the Samsung Galaxy A51."
    },
    {
      "id": 4,
      "name": 'Apple AirPods Pro',
      "price": 8299,
      "image": "5.jpg",
      "description": "Experience the ultimate comfort of using Apple AirPods Pro with Active Noise Cancellation, selectable earbud sizes, and enhanced immersion."
    },
    {
      "id": 5,
      "name": 'Samsung VC07T355MVC',
      "price": 2999,
      "image": "6.jpg",
      "description": "Vacuum cleaner, telescopic tube, nozzle holder, crevice nozzle, wide dust nozzle, narrow dust nozzle"
    },
    {
      "id": 6,
      "name": 'Lenovo IdeaPad 3 15IIL',
      "price": 15299,
      "image": "7.jpg",
      "description": "With the very best equipment, the new Lenovo IdeaPad 3 15IIL (81WE00Q2RA) Platinum Gray is ready to give you all-round possibilities. It offers a wide variety of uses, ranging from teaching functions, running work applications, to tons of entertainment."
    },
    {
      "id": 7,
      "name": 'Dell Vostro 3591',
      "price": 16499,
      "image": "8.jpg",
      "description": "You are viewing: DELL Vostro 3591 15.6-inch Laptop (10th Gen Core i5-1035G1/16GB/512GB SSD/2GB Nvidia MX230/Window 10 + Microsoft Office), BlackYou are viewing: DELL Vostro 3591 15.6-inch…"
    },
    {
      "id": 8,
      "name": 'Defunc True Go Slim TWS Red',
      "price": 1199,
      "image": "9.jpg",
      "description": "Defunc True Go Slim - the wings of Sweden, TWS-headphones, with their unique ergonomic power-saving tabs, broken down to the anatomical features of the wooh, as they sound uncomfortable and sound."
    },
    {
      "id": 9,
      "name": 'KARCHER NT 65',
      "price": 27999,
      "image": "10.jpg",
      "description": "For the smart minds of industrial tidying up a 2-motor pilot cleaner for dry cleaning"
    }
  ]
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools()
)

export default store;