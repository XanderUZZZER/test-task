import { Container, Row, Col } from 'react-bootstrap';
import ProductsList from './screens/ProductsList';

function App() {
  return (
    <Container>
      <Row>
        <Col lg='3'>
          Sorter
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
