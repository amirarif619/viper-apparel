import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUid = userCredential.user.uid;
      const userEmail = userCredential.user.email;

      await axios.post('https://db3e4171-27f7-40ea-8beb-79769220d4b8-00-33yyegd9x7com.pike.replit.dev/users', {
        firebase_uid: firebaseUid,
        email: userEmail});

      console.log('User registered:', userCredential.user);

      navigate('/home')

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          
          <input type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="Email address*"
          className="form-control"/>
        </div>
        <div className="mb-5">
       
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
            placeholder="Password*"
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">Create account</button>
      </form>
    </div>
  );
}

export default SignUp;
