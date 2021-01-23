import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { addProduct } from '../actions/productsActions'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch()

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file.name)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && price && description && image) {
      dispatch(addProduct({
        name,
        price,
        description,
        image
      }))
    }
  }

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Form >
          <Row>
            <Col>
              <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="productPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" min='0' value={price} onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
            </Col>

            <Form.Group controlId="productDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows='5' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

          </Row>
          <Row>
            <Form.File
              id='image-file'
              label={image ? image : 'Choose product image'}
              custom
              onChange={uploadFileHandler}
            ></Form.File>
          </Row>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Add Product
          </Button>
        </Form>

      </Row>
    </Container>
  )
}

export default AddProduct
