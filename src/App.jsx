import HeroBanner from "./components/HeroBanner";
import MainNavbar from "./components/MainNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import PromotionBanner from "./components/PromotionBanner";
import FilterSidebar from "./components/FilterSidebar";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

function App() {
  return (
    <>
     <MainNavbar />
     <PromotionBanner/>
     <div className="mb-5">
    <HeroBanner />
  </div>
    <Container fluid>
      <Row>
        <Col xs={3}>
    <FilterSidebar/>
    </Col>
    <Col xs={9}>
    <Row>
    <ProductGrid/>
    </Row>
    </Col>
    </Row>
    </Container>
    <Cart />
    <Footer/>
    </>
  )
}

export default App
