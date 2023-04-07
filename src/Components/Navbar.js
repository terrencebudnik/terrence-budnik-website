import React from 'react';
import {
  Collapse,
  Navbar as ReactNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../css/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactNavbar color="secondary" light expand="lg">
      <NavbarBrand href="/" className="ml-lg-3 initial-logo">TB</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto center-on-small" navbar>
          <NavItem>
            <NavLink href="#about" className="nav-section">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#portfolio" className="nav-section" >Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#resume" className="nav-section" >Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" className="nav-section">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactNavbar>
  );
};

export default Navbar;
