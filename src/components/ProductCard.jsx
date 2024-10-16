
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import '../styles/ProductCard.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';


function ProductCard({id, name, price, image, description}) {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id, name, price, quantity: 1}))
    }
  return (
    <Card  className="product-card ">
    <div className="image-container">
      <Card.Img 
        variant="top" 
        src={image} 
        className="product-image" 
      />
      <Button variant="light" className="wishlist-button">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
    </div>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>
        <strong>${price.toFixed(2)}</strong>
      </Card.Text>
      <Button variant="dark" onClick={handleAddToCart}>Add to Cart</Button>
    </Card.Body>
  </Card>
);
}

export default ProductCard;
