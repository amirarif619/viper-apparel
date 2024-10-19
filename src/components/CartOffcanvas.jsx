
import {  Button, Offcanvas, Row, Col } from 'react-bootstrap';
import Cart from './Cart';
import { useSelector } from 'react-redux';

function CartOffCanvas({show, handleClose}) {
  const items = useSelector((state) => state.cart.items);
  
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5
  const total = subtotal + shipping;

  return (
    <>
      

      <Offcanvas show={show} onHide={handleClose}  placement="end" style={{ width: '650px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Bag</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="qualified-shipping mb-3">
            <i className="bi bi-check-circle-fill text-success"></i>
            You&apos;ve qualified for Free Standard Shipping 
          </div>
        <Cart/>
        </Offcanvas.Body>
        
        <div className="p-3 border-top">
        <Row>
          <Col xs={6}>
            <p className="mb-1">Sub Total</p>
          </Col>
          <Col xs={6} className="text-end mb-2">
            <p className="mb-1">${subtotal.toFixed(2)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p className="mb-1">Estimated Shipping</p>
          </Col>
          <Col xs={6} className="text-end mb-2">
            <p className="mb-1">${shipping.toFixed(2)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p className="fw-bold">Total</p>
          </Col>
          <Col xs={6} className="text-end">
            <p className="fw-bold">${total.toFixed(2)}</p>
          </Col>
        </Row>
      </div>
    

      <div className="offcanvas-footer p-3">
        <Button variant="primary" className="btn-lg btn-block w-100">
          <i className="bi bi-bag-fill"></i> Checkout Securely
        </Button>
      </div>
      </Offcanvas>
    </>
  );
}

export default CartOffCanvas;