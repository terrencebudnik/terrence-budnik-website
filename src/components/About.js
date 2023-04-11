import { Container, Row, Col } from "reactstrap";
import ReactLogo from '../images/ReactLogo.svg'
import JSLogo from '../images/JSLogo.svg';
import DevLogo from '../images/DevLogo.svg';
import "../css/about.css";



const About = () => {
  return (
    <Container
    className="text-center about-custom"
    outline
    fluid
    id="about"
  >
    <h2 className="about-title">About Me</h2>
    <Row>
            <Col className="text-center">
             <img src={ReactLogo} alt="react logo" />
            </Col>
            <Col className="text-center">
             <img src={JSLogo} alt="js logo" />
            </Col>
            <Col className="text-center">
             <img src={DevLogo} alt="dev logo" />
            </Col>
          </Row>
    <p className="about-info">
I spent many years looking for my passion. My search allowed me to have amazing experiences in Los Angeles and Chicago. After some serious thought, I decided to take an online Python course. Something clicked and that started my interest in programming. I enjoy working on projects and utilizing my past in the performing arts to bring my own creative style. I am continuing my coding education through online courses while looking for an exciting opportunity in web development. 
</p>
  </Container>

  );
}

export default About;



