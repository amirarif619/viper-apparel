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
import { getAuth, signOut } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function MainNavbar() {
  
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
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Container fluid className="align-items-center justify-content-between">



          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={viperLogo}
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="Viper Logo"
            />
            <Nav.Link href="/" className="nav-link-custom px-2">VIPERWEAR</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />
          
          <Navbar.Collapse id="basic-navbar-nav" className="d-lg-none">
            <Nav className="mx-auto nav-links-right">
              <Nav.Link href="/" className="nav-link-custom">WOMEN</Nav.Link>
              <Nav.Link href="/" className="nav-link-custom">MEN</Nav.Link>
              <Nav.Link href="/" className="nav-link-custom">ACCESSORIES</Nav.Link>
              <Nav.Link href="/" className="nav-link-custom">NEW ARRIVALS</Nav.Link>
            </Nav>





            </Navbar.Collapse>

          <div className="ms-auto d-flex align-items-center">
            <NavDropdown
              className="nav-link-custom"
              title={<FontAwesomeIcon icon={faUser} />}
              id="basic-nav-dropdown"
              >
                <NavDropdown.Item >{userEmail}</NavDropdown.Item>
                {userEmail === 'Guest' ? (
              <NavDropdown.Item href="/auth">Log in / Sign Up</NavDropdown.Item>
                ) : (
                  <>
              <NavDropdown.Item href="/">My Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="button" onClick={handleLogout}>Logout</NavDropdown.Item>
              </>
                )}
            </NavDropdown>
            <Nav.Link as="button" className="nav-link-custom position-relative" onClick={handleShow}>
              <i className="bi bi-bag"></i>
              {cartCount > 0 && (
                <span className="cart-badge position-absolute translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Nav.Link>
          </div>
          <Form className="d-flex me-3 search-bar">
          <i className="bi bi-search"></i>
            <Form.Control
              type="search"
              placeholder="Looking for something?"
              className="me-2"
              aria-label="Search"
              style={{ width: '258px' }}
            />
      
          </Form> 

        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;