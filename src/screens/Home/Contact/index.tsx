import { Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Button, DivSecundary, H2, Input, TextArea } from './styles';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  async function handleSendEmail() {
    const data = {
      name,
      email,
      phone,
      message,
    };
  }
  return (
    <DivSecundary id="contato">
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
              <Input
                placeholder="Nome"
                style={{ marginRight: '10px' }}
                onChange={e => setName(e.target.value)}
              />
              <Input
                placeholder="Whatsapp"
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <Form.Group>
              <Input
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <TextArea
                placeholder="Mensagem"
                onChange={e => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button type="button" onClick={() => handleSendEmail()}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </DivSecundary>
  );
}
