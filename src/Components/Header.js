import { Container, Row, Col } from "react-bootstrap";
import "../css/header.css";



export default function Header() {
  return (
    <Container fluid className="header-container" id="home">
      <Row>
        <Col>
        <h1>Terrence Budnik</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2>Full Stack Web Developer</h2>
        </Col>
      </Row>
    </Container>
  );
}