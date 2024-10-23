import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; //reminder that this is to import auth object from firebase
import { useNavigate } from 'react-router-dom';
import '../styles/SignInAndOutForm.css'
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
      
      const response = await fetch('https://viperwearapparel-api.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });
  
      const data = await response.json();
      console.log('Login successful:', data);
  
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          
          <input 
          type="email" 
          placeholder="Email address*"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          className="form-control"
          />
        </div>
        <div className="mb-4">
          
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
          />
          
        </div>
        <button type="submit" className="mt-2 btn btn-dark w-100">Sign In</button>
      </form>
      <p className="mt-3 toggle-text" style={{ textAlign: "center" , fontSize: "16px"}}>
  Don’t have an account? <span style={{ fontSize: "16px" , fontWeight: "bold", textDecoration: "underline" }}>Sign up</span>
</p>

    </div>
  );
}

export default SignIn;
