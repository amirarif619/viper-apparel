import '../styles/ProductGrid.css'
import { Container } from 'react-bootstrap';
import products from '../data/ProductData'
import ProductCard from './ProductCard';


function ProductGrid() {
  return (
        <Container fluid>
    <div className="product-grid" style={{ padding: '20px' }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          variants={product.variants}
          />
        ))}
    </div>
        </Container>
  );
}

export default ProductGrid;
