import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import viperLogo from '../assets/viper.png'
import '../styles/MainNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react';
import CartOffcanvas from './CartOffcanvas';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchCart } from '../redux/cartSlice';
import { getAuth } from 'firebase/auth';


function MainNavbar() {
  
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const auth = getAuth();
  
  const cartItems = useSelector((state) => state.cart.items) || [];
  const cartCount = Array.isArray(cartItems) 
  ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
  : 0
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       
        dispatch(fetchCart());
      }
    })
    
    return () => unsubscribe();
  }, [auth, dispatch]);
  
  console.log('Current Cart Items:', cartItems); 
  console.log('Cart Count:', cartCount); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <CartOffcanvas show={show} handleClose={handleClose} />
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="/" className="me-auto">
        
        <img 
        src={viperLogo}
        width="75"
        height="75"
        className="d-inline-block align-top"
        alt="Viper Logo"
        /> 
        
      </Navbar.Brand>
      <Nav.Link href="/" className="nav-link-custom px-2">VIPERWEAR</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          
            <Nav.Link href="/" className="nav-link-custom">WOMEN</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">MEN</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">ACCESSORIES</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">NEW ARRIVALS</Nav.Link>
            
            <NavDropdown  className="nav-link-custom" title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="/auth">Log in / Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/">My Orders</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link as="button" className="nav-link-custom position-relative" onClick={handleShow}>
                <i className="bi bi-bag"></i>
                {cartCount > 0 && (
                  <span className="cart-badge position-absolute translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}

</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
  
export default MainNavbar;