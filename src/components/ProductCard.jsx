
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import '../styles/ProductCard.css'


function ProductCard({image}) {
  return (
    <Card className="product-card">
      <div className="image-container">
        <Card.Img 
        variant="top" 
        src={image} 
        className="product-image" />
       <Button variant="light" className="wishlist-button">
          <FontAwesomeIcon icon={faHeart} />
        </Button>
      </div>
      <Card.Body>
        <Card.Title className="product-title">Power T-Shirt</Card.Title>
        <Card.Text className="product-fit">Oversized Fit</Card.Text>
        <Card.Text className="product-color">Black</Card.Text>
        <div className="product-price-rating d-flex justify-content-between align-items-center">
          <span className="product-price">RM 40</span>
          <div className="product-rating d-flex align-items-center">
            <FontAwesomeIcon icon={faStar} />
            <span className="ms-1">4.4</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}


export default ProductCard;
