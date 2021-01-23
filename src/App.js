import { Container, Row, Col } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { getProducts, sortDesc } from './actions/productsActions'

import ProductsList from './screens/ProductsList'
import CockpitPanel from './screens/CockpitPanel'

function App() {
  const dispatch = useDispatch()
  // dispatch(getProducts())
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
    </Container>
  )
}

export default App;
