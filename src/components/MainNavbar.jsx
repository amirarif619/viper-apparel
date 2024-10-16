import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import viperLogo from '../assets/viper.png'
import './MainNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="/" className="me-auto">
        <img 
        src={viperLogo}
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt="Viper Logo"
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link-custom">WOMEN</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">MEN</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">ACCESSORIES</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">NEW ARRIVALS</Nav.Link>
            <NavDropdown  className="nav-link-custom" title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/search">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="/cart">
              <i className="bi bi-bag"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
  
export default MainNavbar;