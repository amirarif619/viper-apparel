import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa, faCcMastercard, faCcPaypal, faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer ms-3">
      <Container fluid >
        <Row className="py-4">
          <Col xs={12} md={3}>
            <h6>HELP</h6>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Returns Policy</a></li>
              <li><a href="#">Make A Return</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Submit a Fake</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6>MY ACCOUNT</h6>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6>PAGES</h6>
            <ul>
              <li><a href="#">VIPERWEAR Central</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Student Discount</a></li>
              <li><a href="#">Factory List</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6>MORE ABOUT VIPER</h6>
            <ul>
              <li><a href="#">Email newsltter</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">JOIN THE SNAKEPIT</a></li>
            
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col xs={12} md={6}>
            <div className="footer-payment-methods">
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcPaypal} />
              <FontAwesomeIcon icon={faCcApplePay} />
            </div>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <div className="footer-social-icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </Col>
        </Row>
        <Row className="footer-legal text-center py-3">
          <Col>
            <small>© 2024 Viperwear Limited | All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
