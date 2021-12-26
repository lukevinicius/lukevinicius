import { Col, Form, Row } from 'react-bootstrap';
import { Button, Div, DivSecundary, H2, Input, TextArea } from './styles';

export function Contact() {
  return (
    <DivSecundary>
      <Row>
        <Col>
          <H2 style={{ fontSize: '64px' }}>Gostou do meu trabalho?</H2>
          <H2 style={{ fontSize: '24px' }}>
            Entre em contato a partir do formulário ao lado.
          </H2>
        </Col>
        <Col>
          <Form>
            <div className="d-flex">
              <Input placeholder="Nome" style={{ marginRight: '10px' }} />
              <Input placeholder="Whatsapp" />
            </div>
            <Form.Group>
              <Input placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <TextArea placeholder="Mensagem" />
            </Form.Group>
            <Button>Enviar</Button>
          </Form>
        </Col>
      </Row>
    </DivSecundary>
  );
}
