import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import viperLogo from '../assets/viper.png';
import '../styles/SecondNavbar.css';
import '../styles/AdditionalNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import CartOffcanvas from './CartOffcanvas';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchCart } from '../redux/cartSlice';
import { getAuth, signOut } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function NewNavbar() {

  const [show, setShow] = useState(false);
  const [userEmail, setUserEmail] = useState('Guest')
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.items) || [];
  const cartCount = Array.isArray(cartItems) 
  ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
  : 0
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       setUserEmail(user.email);
        dispatch(fetchCart());
      } else {
        setUserEmail('Guest');
      }
    });
    
    return () => unsubscribe();
  }, [auth, dispatch]);
  
  console.log('Current Cart Items:', cartItems); 
  console.log('Cart Count:', cartCount); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User has logged out');
      navigate('/')
    } catch (error) {
        console.error('Error logging out:', error)
      }
  }
return (
    <>
      <CartOffcanvas show={show} handleClose={handleClose} />
    <Navbar bg="light" expand="lg" className="navbar-clean">
      <Container fluid className="align-items-center justify-content-between">
        
        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" />
          </div>

          <div className="d-flex align-items-center mx-auto"></div>
          <Navbar.Brand href="/" className="mx-auto d-flex align-items-center justify-content-center">
            <img
              src={viperLogo}
              width="50"
              height="50"
              className="d-none d-lg-block"
              alt="Viper Logo"
            />
            <span className="brand-text ms-2">VIPERWEAR</span>
          </Navbar.Brand>
       
      
        <div className="d-flex align-items-center ms-auto order-lg-3">

        <Form className="d-flex me-3 search-bar">
          <i className="bi bi-search me-3 search-icon"></i>
            <Form.Control
              type="search"
              placeholder="Looking for something?"
              className="me-2"
              aria-label="Search"
              style={{ width: '258px' }}
            />
          </Form>


          <NavDropdown 
            title={<FontAwesomeIcon 
            icon={faUser} />} 
            id="basic-nav-dropdown" 
            className="me-3 custom-dropdown"
            align="end"
            >
            <NavDropdown.Item >{userEmail}</NavDropdown.Item>
                {userEmail === 'Guest' ? (
              <NavDropdown.Item href="/auth">Log in / Sign Up</NavDropdown.Item>
                ) : (
                  <>
              <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">My Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="button" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="me-3" />
                Logout</NavDropdown.Item>
              </>
                )}
            </NavDropdown>

          <Nav.Link as="button" className="position-relative" onClick={handleShow}>
            <i className="bi bi-bag"></i>
            {cartCount > 0 && (
            <span className="cart-badge position-absolute top-3 start-2 badge rounded-pill bg-danger">
            {cartCount}
            </span>
            )}
          </Nav.Link>
        </div>

       
        <Navbar.Collapse id="basic-navbar-nav" className="order-lg-2">
          <Nav className="mx-auto navbar-nav ">
            <Nav.Link href="/" className="nav-link-custom">WOMEN</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">MEN</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">ACCESSORIES</Nav.Link>
            <Nav.Link href="/" className="nav-link-custom">NEW ARRIVALS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    </>
  );
}

export default NewNavbar;
