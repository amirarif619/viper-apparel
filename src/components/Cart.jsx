
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../features/cart/cartSlice';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateItemQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div>
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="cart-item">
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
            <div>
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <select
                id={`quantity-${item.id}`}
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              >
                {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={() => dispatch(removeItem({ id: item.id }))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
