import HeroBanner from "./components/HeroBanner";
import MainNavbar from "./components/MainNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import PromotionBanner from "./components/PromotionBanner";
import FilterSidebar from "./components/FilterSidebar";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <Footer/>
    <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
