import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; //reminder that this is to import auth object from firebase
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      console.log('Firebase ID Token:', token)
                                    
      const response = await fetch('https://db3e4171-27f7-40ea-8beb-79769220d4b8-00-33yyegd9x7com.pike.replit.dev/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
      })

      const data = await response.json();
      console.log('Cart data:', data);

      navigate('/')

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          className="form-control"
          />
        </div>
        <div className="mb-5">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
