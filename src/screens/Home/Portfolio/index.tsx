import { Col, Row } from 'react-bootstrap';
import { Div, DivProject } from './styles';

export function Portfolio() {
  return (
    <Div id="portfolio">
      <h2
        style={{
          color: 'var(--shape)',
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        Portfolio
      </h2>
      <Row>
        <Col>
          <DivProject>
            <h2 style={{ color: 'var(--shape)' }}>Memoirs</h2>
            <p style={{ color: 'var(--shape)' }}>Em desenvolvimento</p>
          </DivProject>
        </Col>
        <Col>
          <DivProject>
            <h2 style={{ color: 'var(--shape)' }}>O Palpiteiro</h2>
            <p style={{ color: 'var(--shape)' }}>Em desenvolvimento</p>
          </DivProject>
        </Col>
      </Row>
    </Div>
  );
}
