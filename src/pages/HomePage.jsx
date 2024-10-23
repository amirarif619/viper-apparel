import HeroBanner from "../components/HeroBanner";
//import MainNavbar from "../components/MainNavbar"
import PromotionBanner from "../components/PromotionBanner";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SecondNavbar from "../components/SecondNavbar";

const HomePage = () => {
    return (
        <>
       
        <SecondNavbar />
        <PromotionBanner/>
        <div className="mb-5">
       <HeroBanner />
     </div>
       <Container fluid>
         <Row>
           <Col xs={3} className="d-none d-md-block" >
       <FilterSidebar/>
       </Col>
       <Col xs={12} md={9}>
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

   export default HomePage