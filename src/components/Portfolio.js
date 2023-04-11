import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../css/portfolio.css";



const Portfolio = () => {
  return (

    <Container
      className="portfolio-custom"
      id="portfolio"
      fluid>
      <h2 className="portfolio-title">Portfolio</h2>
      <Row className="projects">
        <Col>
          <h3>Marvel Fan Fiction</h3>
          <ul>
            <li>Project that allows users to sign in and create Marvel-themed collaborative stories</li>
            <li>React, JavaScript, MongoDB, Axios, Bootstrap (+React), Node.js, Marvel API</li>
            <li>Links</li>
              <ul>
                <li>Live Link: https://stark-sierra-05669.herokuapp.com/</li>
                <li>GitHub: https://github.com/hamzaramzanali/fan-fiction</li>
              </ul>
           
          </ul>
        </Col>
      </Row>
      <Row className="projects">
        <Col>
          <h3>Top Book Generator</h3>
          <ul>
            <li>Project enabling users to search and subsequently read all public domain EBooks</li>
            <li>HTML, CSS, JavaScript, jQuery, Materialize, Project Gutenberg API</li>
            <li>Links</li>
              <ul>
                <li>Live Link: https://terrencebudnik.github.io/top-book-generator/</li>
                <li>GitHub: https://github.com/terrencebudnik/top-book-generator</li>
              </ul>
           
          </ul>
        </Col>
      </Row>

    </Container>

  );
};

export default Portfolio;

