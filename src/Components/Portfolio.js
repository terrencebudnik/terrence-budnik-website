import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactLogo from '../images/ReactLogo.svg'
import JSLogo from '../images/JSLogo.svg';
import DevLogo from '../images/DevLogo.svg';



const Portfolio = () => {
    return (

        <Container fluid>
          <Row>
            <Col>
             <img src={ReactLogo} alt="react logo" />
            </Col>
            <Col>
             <img src={JSLogo} alt="js logo" />
            </Col>
            <Col>
             <img src={DevLogo} alt="dev logo" />
            </Col>
          </Row>
          
        </Container>
 
    );
  };
  
  export default Portfolio;
  
  