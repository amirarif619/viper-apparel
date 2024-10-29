
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button, Placeholder } from 'react-bootstrap';
import '../styles/ProductCard.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function ProductCard({product_variant_id, name, price, image, backImage, description, rating, isNew}) {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch();


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

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
      {isNew && <span className="badge-new">NEW</span>}

    {isLoading ? (
       <div className="product-image-placeholder" />
        ) : (
      <>
      <Card.Img 
        variant="top" 
        src={image} 
        className="product-image" 
      />
              <Card.Img 
          variant="top" 
          src={backImage} 
          className="product-back-image" 
        />
      </>
    )}
      <Button variant="light" className="wishlist-button">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
    </div>

    <Card.Body>
      {isLoading ? (
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
      ) : (
      <Card.Title>{name}</Card.Title>
      )}
      {isLoading ? (
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={8} /><Placeholder xs={5} />
        </Placeholder>
      ) : (
      <Card.Text>{description}</Card.Text>
      )}
      
      <div className="price-rating">
        {isLoading ? (
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={4} />
          </Placeholder>
        ) : (
        <Card.Text className="price">
          <strong>${price.toFixed(2)}</strong>
        </Card.Text>
        )}
        <div className="rating">
          {isLoading ? (
            <Placeholder animation="glow">
              <Placeholder xs={2} />
            </Placeholder>
          ) : (
            <>
          <FontAwesomeIcon icon={faStar} /> 
          <span>{rating}</span> 
          </>
          )}
        </div>
      </div>

      <div className="addtocart-container">
          {isLoading ? (
            <Placeholder.Button variant="dark" xs={12} className="full-width-placeholder" />
          ) : (
            <Button 
              className="addtocartbutton" 
              variant="dark" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          )}
</div>
    </Card.Body>
  </Card>
);
}

export default ProductCard;
