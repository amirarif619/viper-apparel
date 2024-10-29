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
import { useEffect, useState } from "react";
import products from "../data/ProductData";
import { useSelector } from "react-redux";

const HomePage = () => {
  
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [originalProducts] = useState([...products]); 
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  
   const handleColorChange = (color) => {
    setSelectedColor(color);
    filterAndSortProducts(color, selectedSort);
  };

 
  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
    filterAndSortProducts(selectedColor, sortType);
  };

  
  const filterAndSortProducts = (color, sortType) => {
    let filtered = [...originalProducts]; 

   
    if (color) {
      filtered = filtered.filter((product) => product.color.toLowerCase() === color.toLowerCase());
    }

    
    if (sortType === 'PRICE_HIGH_TO_LOW') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortType === 'PRICE_LOW_TO_HIGH') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === 'NEWEST') {
      const newProducts = filtered.filter((product) => product.isNew === true);
      const oldProducts = filtered.filter((product) => product.isNew === false);
      filtered = [...newProducts, ...oldProducts]; 
    }

    setFilteredProducts(filtered);
  };

  
  const handleClearAll = () => {
    setSelectedColor(''); 
    setSelectedSort('');
    setFilteredProducts([...originalProducts]); 
  };


  useEffect(() => {
   
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]); 
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
       <FilterSidebar 
       onColorChange={handleColorChange} 
       onSortChange={handleSortChange}
       onClearAll={handleClearAll} 
       />
       </Col>
       <Col xs={12} md={9}>
       <Row>
       <ProductGrid products={filteredProducts}/>
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