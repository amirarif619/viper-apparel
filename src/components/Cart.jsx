import { useDispatch, useSelector } from 'react-redux';
import {  removeItem, updateItemQuantity } from '../redux/cartSlice';
import { Card, Form, Button, Spinner, Modal } from 'react-bootstrap';
import products from '../data/ProductData'; 
import { useEffect, useState } from 'react';

function Cart() {
  
  const dispatch = useDispatch();
  const updatedCartItems = useSelector((state) => state.cart.items);
  const [loadingItemId, setLoadingItemId] = useState(null);
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  console.log('Updated cart state:', updatedCartItems);

  useEffect(() => {
    console.log("Cart updated:", updatedCartItems);
  }, [updatedCartItems])
 
   const handleQuantityChange = (id, newQuantity) => {
    console.log(`Updating item with Cart ID: ${id}, New Quantity: ${newQuantity}`);
    
    setLoadingItemId(id);  
    dispatch(updateItemQuantity({ id, quantity: newQuantity }))
    .finally(() => {
      setLoadingItemId(null);  
    });
};

const handleShowDeleteModal = (product_variant_id) => {
  setItemToDelete(product_variant_id);  
  setShowDeleteModal(true);  
};

const handleConfirmDelete = () => {
  if (itemToDelete) {
    handleRemoveItem(itemToDelete); 
    setShowDeleteModal(false); 
  }
};

const handleRemoveItem = (product_variant_id) => {
  setLoadingItemId(product_variant_id); 

  dispatch(removeItem(product_variant_id))
    .finally(() => {
      setLoadingItemId(null);
      setShowDeleteModal(false)
    })
    .catch((error) => {
      console.error('Error removing item:', error);
    });
};
    
  
    
    
    const mergedCartItems = updatedCartItems.map((cartItem) => {
      const product = products.find((p) => p.product_variant_id === cartItem.product_variant_id); 
      return {
        ...cartItem,  
        ...product, 
        image: product?.image
      };
    });
    
    console.log('Updated cart state:', updatedCartItems);

  
  return (
    <div className="cart-items">
      {mergedCartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        mergedCartItems.map((item) => {
          const isLoading = loadingItemId === item.id;
         

          return (
            <Card className="mb-3" key={item.product_variant_id}>
              <Card.Body className="d-flex align-items-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="img-fluid me-3"
                  style={{ width: '100px', height: 'auto', borderRadius: '10px' }} 
                />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p className="text-muted">{item.description}</p>
                  <p className="fw-bold">${item.price}</p>
                  <div className="d-flex align-items-center">
                    <Form.Label className="me-2 mb-0">Qty:</Form.Label>
                    {isLoading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                    <Form.Select
                    key={`qty-${item.id}`}
                    value={item.quantity}
                      onChange={(e) => 
                        handleQuantityChange(item.id, parseInt(e.target.value))}
                      style={{ width: '75px'}}
                    >
                      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </Form.Select>
                    )}
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Button
                    variant="light"
                    onClick={() => handleShowDeleteModal(item.product_variant_id)}
                    className="rounded-circle p-2 shadow-sm"
                    style={{ width: '40px', height: '50px' }}
                  >
                    <i className="bi bi-trash" style={{ fontSize: '20px' }}></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
            
        );
      })
    )}
    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Remove from bag</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  
);
}

export default Cart;
