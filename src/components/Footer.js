import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Terrence Budnik</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a> &bull;
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

