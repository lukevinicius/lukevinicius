import { Col, Row } from 'react-bootstrap';
import { Div } from './styles';

export function Portfolio() {
  return (
    <Div id="portfolio">
      <h2 style={{ color: 'var(--shape)', textAlign: 'center' }}>Portfolio</h2>
      <Row>
        <Col>
          <h2 style={{ color: 'var(--shape)' }}>Memoirs</h2>
        </Col>
        <Col>
          <h2 style={{ color: 'var(--shape)' }}>O Palpiteiro</h2>
        </Col>
      </Row>
    </Div>
  );
}
