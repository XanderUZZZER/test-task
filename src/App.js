import { Container, Row, Col } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { sortDesc } from './actions/productsActions'

import ProductsList from './screens/ProductsList'
import CockpitPanel from './screens/CockpitPanel'
import AddProduct from './screens/AddProduct'

function App() {
  const dispatch = useDispatch()
  dispatch(sortDesc())

  return (
    <Container>
      <Row>
        <Col lg='3'>
          <CockpitPanel />
        </Col>
        <Col lg='9'>
          <Row>
            <ProductsList />
          </Row>
        </Col >
      </Row>
      <Row>
        <AddProduct />
      </Row>
    </Container>
  )
}

export default App;
