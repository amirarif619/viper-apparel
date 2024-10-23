import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import confetti from 'canvas-confetti';

const SuccessPage = () => {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(8);
  const navigate = useNavigate()

  const { width, height } = window;

  useEffect(() => {
   
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get('session_id');

    if (sessionId) {
     
      fetch(`https://viperwearapparel-api.vercel.app/api/retrieve-checkout-session/${sessionId}`)
        .then(response => response.json())
        .then(data => {
          setSessionData(data);
          setLoading(false);

          confetti({
            particleCount: 300,
            startVelocity: 50,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },  
          });

        })
        .catch(error => {
          console.error('Error fetching session:', error);
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (!loading && sessionData) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      if (countdown === 0) {
        navigate('/home'); 
      }

      return () => clearInterval(countdownInterval);  
    }
  }, [loading, sessionData, countdown, navigate]);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (!sessionData) {
    return <p>No session data available. Please try again.</p>;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Confetti width={width} height={height} />
    <h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
      🎉 Woohoo! Your order is on its way to you! 🎉
    </h1>
    <Card className="mt-4 text-center shadow" style={{ width: '24rem' }}>
      <Card.Body>
        <Card.Title className="mb-3">Payment Successful!</Card.Title>
        <Card.Text className="mt-3">Thank you for your purchase!</Card.Text>
        <Card.Text>Total: ${sessionData.amount_total / 100}</Card.Text>
        <Card.Text>We’ve sent a confirmation email with the details of your order to {sessionData.customer_details.email}.</Card.Text>
        <Card.Text className="mt-3">Should there be any issues please email support@viperwear.com</Card.Text>
        <Card.Text>Redirecting to home page in {countdown} seconds...</Card.Text>
        <Button className="mt-3" variant="dark" onClick={() => navigate('/')}>Return to Home</Button>
      </Card.Body>
    </Card>
  </div>
  
  )} 

export default SuccessPage;
