import { Container } from "reactstrap";
import "../css/header.css";



const Header = () => {
  return (
    <Container
      className="text-center header-custom"
      outline
      fluid
    >
      <h1 className="title">Terrence Budnik</h1>
      <h2 className="subtitle">Chicago Web Developer</h2>
    </Container>

  );
}

export default Header;