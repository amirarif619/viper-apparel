import { useDispatch, useSelector } from 'react-redux';
import {   fetchCart, removeItem, updateItemQuantity } from '../redux/cartSlice';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import products from '../data/ProductData'; 
import { useState } from 'react';

function Cart() {
  
  const dispatch = useDispatch();
  const updatedCartItems = useSelector((state) => state.cart.items);
  const [loadingItemId, setLoadingItemId] = useState(null);
  
  console.log('Updated cart state:', updatedCartItems);

   // Handle quantity change in the local state
   const handleQuantityChange = (id, newQuantity) => {
    console.log(`Updating item with Cart ID: ${id}, New Quantity: ${newQuantity}`);
    
    setLoadingItemId(id);  // Show loading spinner for this item
    dispatch(updateItemQuantity({ id, quantity: newQuantity }))
    .unwrap()
    .then(() => {
      // Once update is complete, refetch the cart data
      dispatch(fetchCart());
    })
    .finally(() => {
      setLoadingItemId(null);  // Stop the spinner
    });
};



    const handleRemoveItem = (product_variant_id) => {
      dispatch(removeItem(product_variant_id));
    }
    
  
    
    // Merging cart items with product data for display
    const mergedCartItems = updatedCartItems.map((cartItem) => {
      const product = products.find((p) => p.product_variant_id === cartItem.product_variant_id); 
      return {
        ...cartItem,  
        ...product, 
        image: product?.image
      };
    });
    
    console.log('Updated cart state:', updatedCartItems);

  // Render the cart items
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
                    onClick={() => handleRemoveItem(item.product_variant_id)}
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
  </div>
);
}

export default Cart;
