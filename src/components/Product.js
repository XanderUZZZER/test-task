import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  const currency = useSelector(state => state.products.currency)
  return (
    <Card className='my-3 p-2 rounded'>
      <Card.Img variant='top' src={`./products/${product.image}`} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>{currency === 1 ? 'UAH' : '$'} {(product.price * currency).toFixed(2)}</Card.Subtitle>
        <Card.Text className='mt-3'>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
