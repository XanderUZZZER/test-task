import { Container, Row, Col } from 'react-bootstrap'

import ProductsList from './screens/ProductsList'
import Filter from './components/Filter'
import Currency from './components/Currency'
import Sorter from './components/Sorter'

function App() {
  return (
    <Container>
      <Row>
        <Col lg='3'>
          <Filter />
          <Currency />
          <Sorter />
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
