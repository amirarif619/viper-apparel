import HeroBanner from "./components/HeroBanner";
import MainNavbar from "./components/MainNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import PromotionBanner from "./components/PromotionBanner";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard from "./components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import stringer from './assets/stringer.png'
import shirtTop from './assets/shirt.png'
import oversized from './assets/oversized.png'

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
        <Col xs={2}>
    <FilterSidebar/>
    </Col>
    <Col xs={10}>
    <Row>
    <ProductCard image={stringer}/>
    <ProductCard image={shirtTop}/>
    <ProductCard image={oversized}/>
    <ProductCard image={stringer}/>
    </Row>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default App
