
import {  Offcanvas, Row, Col } from 'react-bootstrap';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState,  } from 'react';
import { fetchCart } from '../redux/cartSlice';
import products from '../data/ProductData'; 
import CheckoutButton from './CheckoutButton';


function CartOffCanvas({show, handleClose}) {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);
  const [cartFetched, setCartFetched] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(show);
  

 
  useEffect(() => {
    if (show) {
      setOffCanvasOpen(true);
    } else {
      setOffCanvasOpen(false);
    }
  }, [show]);

  useEffect(() => {
    if (!cartFetched) {
      dispatch(fetchCart()).then((response) => {
        console.log("Cart fetched from backend:", response);
        setCartFetched(true); 
      });
    }
  }, [cartFetched, dispatch]);
  
  const cartItems = Array.isArray(items) ? items : [];

  if (loading) return <p>Loading cart....</p>;
  if (error) return <p>Error fetching cart: {error}</p>
  
  const subtotal = cartItems.reduce((acc, item) => {
    const product = products.find((p) => p.product_variant_id === item.product_variant_id);
    const itemPrice = product?.price || 0;
    const itemQuantity = item.quantity || 0;

    console.log(`Calculating subtotal for item: ${product?.name}, Price: ${itemPrice}, Quantity: ${itemQuantity}`);
    return acc + itemPrice * itemQuantity;
  }, 0);
    


  const shipping = 5
  const total = subtotal + shipping;

  return (
    <>
      

      <Offcanvas show={offCanvasOpen} onHide={handleClose}  placement="end" style={{ width: '650px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Bag</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="qualified-shipping mb-3">
            <i className="bi bi-check-circle-fill text-success"></i>
            You&apos;ve qualified for Free Standard Shipping 
          </div>
        <Cart items={cartItems} subtotal={subtotal}/>
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
        <CheckoutButton cartItems={cartItems} />
      </div>
      </Offcanvas>
    </>
  );
}

export default CartOffCanvas;