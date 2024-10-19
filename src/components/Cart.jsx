
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../features/cart/cartSlice';
import { Card, Form, Button } from 'react-bootstrap';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateItemQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div className="cart-items">
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <Card className="mb-3" key={item.id}>
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
                <Form.Select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  style={{ width: '75px'}}
                  >
                  {Array.from({ length: 9}, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                    </option>
                  ))}
                  </Form.Select>
            </div>
         </div>
         <div className="d-flex flex-column align-items-center">
  <Button
    variant="light"
    onClick={() => dispatch(removeItem({ id: item.id }))}
    className="rounded-circle p-2 shadow-sm"
    style={{ width: '40px', height: '50px' }}
  >
    <i className="bi bi-trash" style={{ fontSize: '20px' }}></i>
  </Button>
</div>
    </Card.Body>
    </Card>
  ))
)}
</div>
)
}

export default Cart;
