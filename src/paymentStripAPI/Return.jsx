import { useState, useEffect } from 'react';

const Return = () => {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    fetch(`viperwearapparel-9f03cja0v-amirarif619s-projects.vercel.app/session-status?session_id=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setEmail(data.customer_email);
      });
  }, []);

  if (status === 'complete') {
    return <h2>Thank you for your purchase! A confirmation email has been sent to {email}.</h2>;
  }
  
  return null;
};

export default Return;
