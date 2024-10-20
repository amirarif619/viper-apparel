
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import '../styles/ProductCard.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function ProductCard({product_variant_id, name, price, image, description}) {

  const dispatch = useDispatch();

    const handleAddToCart = () => {
      
        const resolvedImage = new URL(image, import.meta.url).href;
        console.log({ product_variant_id, name, price, quantity: 1 });
        dispatch(addItem({ product_variant_id, name, price, quantity: 1, image: resolvedImage}))
    

        toast(
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src={image} 
                alt={name} 
                style={{ width: '70px', height: '70px', marginRight: '15px', borderRadius: '5px' }} 
              />
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: 0, fontSize: '19px', color: '#000', fontWeight: 'bold', padding: '5px' }}>Added To Bag</h4>
                <p style={{ margin: 0, fontSize: '17px' }}>{name}</p>
              </div>
              <FontAwesomeIcon 
                icon={faCheckCircle} 
                style={{ marginLeft: 'auto', color: 'black', fontSize: '20px' }} 
              />
            </div>,
           
            
          );
        };
        

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
