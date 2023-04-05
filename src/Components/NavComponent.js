import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/mynavbar.css';


export default function NavComponent() {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-center" style={{flex: '1'}}>
          <Nav.Link href="#home" id="nav-item">Home</Nav.Link>
          <Nav.Link href="#about" id="nav-item">About Me</Nav.Link>
          <Nav.Link href="#projects" id="nav-item">Projects</Nav.Link>
          <Nav.Link href="#resume" id="nav-item">Resume</Nav.Link>
          <Nav.Link href="#contact" id="nav-item">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
  