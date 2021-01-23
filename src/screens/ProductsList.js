import React from 'react'
import { useSelector } from 'react-redux'
import { Col } from 'react-bootstrap';
import Product from '../components/Product'

const ProductsList = () => {
  const products = useSelector(state => state.products)

  return products.map((product) => (
    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
      <Product product={product} />
    </Col>
  ))
}

export default ProductsList
