import Carousel from 'react-bootstrap/Carousel';
import '../styles/PromotionBanner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function PromotionBanner() {
    const [isPaused, setIsPaused] = useState(false);
    const [intervalTime, setIntervalTime] = useState(5000);

    const handlePausePlay = () => {
        if (isPaused) {
            setIntervalTime(5000); 
        } else {
            setIntervalTime(null); 
        }
        setIsPaused(!isPaused);
    };
        return (
            <div className="promotion-banner-container">
          <Carousel 
          
          controls={false} 
          indicators={false} 
          interval={intervalTime} 
          className="horizontal-carousel"
           >
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <p className="m-0"> 🎃20% HALLOWEEN DISCOUNT! USE CODE SPOOKY20 🎃</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <p className="m-0">🎁 FREE RETURNS ON ALL ORDERS 🎁</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <p className="m-0">✈️ FREE SHIPPING ON ORDERS OVER $50 ✈️</p>
              </div>
            </Carousel.Item>
          </Carousel>
          <button className="pause-play-btn" onClick={handlePausePlay}>
                <FontAwesomeIcon icon={isPaused ? faPlay : faPause} size="sm"/>
            </button>
        </div>
        );
      }
      
      export default PromotionBanner;
      