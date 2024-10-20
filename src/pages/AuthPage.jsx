import  { useState } from 'react';
import SignIn from './SignIn'; 
import './AuthPage.css';  
import landingpage from '../assets/landingpage.png'
import SignUp from '../components/SignUp';




const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div
          className="col-lg-6 d-none d-lg-block promo-side text-white p-5"
          style={{
            backgroundImage: landingpage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="promo-content">
            <h1 className="display-4 fw-bold">SHOP YOUR WAY</h1>
            <p className="lead">
              Discover the latest launches and be the first to get notifications for new drops.
            </p>
          </div>
        </div>

        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="form-container p-5 w-100" style={{ maxWidth: "400px" }}>
            <div className="text-center mb-4">
              <img
                src="gymshark-logo.png"
                alt="Gymshark Logo"
                className="logo mb-3"
                style={{ width: "150px" }}
              />
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn ${isLogin ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setIsLogin(true)}
                >
                  LOG IN
                </button>
                <button
                  type="button"
                  className={`btn ${!isLogin ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setIsLogin(false)}
                >
                  SIGN UP
                </button>
              </div>
            </div>

            {isLogin ? <SignIn /> : <SignUp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;