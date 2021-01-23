import { Container, Row, Col } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { sortDesc } from './actions/productsActions'

import ProductsList from './screens/ProductsList'
import Filter from './components/Filter'
import Currency from './components/Currency'
import Sorter from './components/Sorter'

function App() {
  const dispatch = useDispatch()
  dispatch(sortDesc())

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
