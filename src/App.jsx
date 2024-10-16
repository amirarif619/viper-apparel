import HeroBanner from "./components/HeroBanner";
import MainNavbar from "./components/MainNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import PromotionBanner from "./components/PromotionBanner";


function App() {
  return (
    <>
     <MainNavbar />
     <PromotionBanner/>
    <HeroBanner />

    </>
  )
}

export default App
