import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img variant='top' src={`./products/${product.image}`} />
      <Card.Body>
        <Card.Text as='h2'>{product.name}</Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
