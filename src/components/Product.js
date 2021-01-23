import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  const currency = useSelector(state => state.products.currency)
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img variant='top' src={`./products/${product.image}`} />
      <Card.Body>
        <Card.Text as='h2'>{product.name}</Card.Text>
        <Card.Text as='h3'>{currency === 1 ? 'UAH' : '$'} {(product.price * currency).toFixed(2)}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
