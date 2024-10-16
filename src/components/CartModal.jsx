
import {  Modal } from 'react-bootstrap';
import Cart from './Cart';

function CartModal({show, handleClose}) {


  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Cart/>
      </Modal>
    </>
  );
}

export default CartModal;