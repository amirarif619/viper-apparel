import '../styles/ProductGrid.css'
import { Container } from 'react-bootstrap';
//import products from '../data/ProductData'
import ProductCard from './ProductCard';


function ProductGrid( { products }) {
  return (
        <Container fluid>
      {products.length > 0 ? (
    <div className="product-grid" >
      {products.map((product) => (
        <ProductCard
          key={product.product_variant_id}
          product_variant_id={product.product_variant_id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          variants={product.variants}
          rating={product.rating}
          isNew={product.isNew}
          backImage={product.backImage}
          color={product.color}
          />
        ))}
        </div>
      ) : (
        <div className="mt-5 no-products-found">
          <h3>No Products Found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      )}
   
        </Container>
  );
}

export default ProductGrid;
