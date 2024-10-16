import HeroBanner from "./components/HeroBanner";
import MainNavbar from "./components/MainNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import PromotionBanner from "./components/PromotionBanner";
import FilterSidebar from "./components/FilterSidebar";


function App() {
  return (
    <>
     <MainNavbar />
     <PromotionBanner/>
    <HeroBanner />
    <FilterSidebar/>

    </>
  )
}

export default App
