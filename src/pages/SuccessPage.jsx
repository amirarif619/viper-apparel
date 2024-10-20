import { useEffect, useState } from 'react';

const SuccessPage = () => {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get('session_id');

    if (sessionId) {
     
      fetch(`/retrieve-checkout-session/${sessionId}`)
        .then(response => response.json())
        .then(data => {
          setSessionData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching session:', error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!sessionData) {
    return <p>No session data available. Please try again.</p>;
  }

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase!</p>
      <p>Total: ${sessionData.amount_total / 100}</p>
      <p>We’ve sent a confirmation email to {sessionData.customer_details.email}.</p>
    </div>
  );
};

export default SuccessPage;
