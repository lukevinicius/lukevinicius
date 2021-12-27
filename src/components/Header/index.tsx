import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from './styles';

export function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: 'transparent' }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home" style={{ color: 'var(--shape)' }}>
              HOME
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#about"
              style={{ color: 'var(--shape)' }}
            >
              SOBRE MIM
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              href="#portfolio"
              style={{ color: 'var(--shape)' }}
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              href="#contato"
              style={{ color: 'var(--shape)' }}
            >
              <Button>CONTATO</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
