import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { cartCreate } from '../../CartContext';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserEmail, setUserPassword, setGoogleEmail } = useContext(cartCreate);

  const handleClick = (e) => {
    e.preventDefault();
    if (email === 'test@gmail.com' && password === '123') {
      localStorage.setItem('userEmail', JSON.stringify(email));
      localStorage.setItem('userPassword', JSON.stringify(password));
      setUserEmail(email);
      setUserPassword(password);
      alert('Login successful!');
      setTimeout(() => navigate('/home'), 500);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100 justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="row g-0">
              <div className="col-md-5 bg-primary text-white d-flex flex-column justify-content-center align-items-center p-4 rounded-start-4">
                <h2 className="fw-bold">Welcome Back!</h2>
                <p className="text-center">Sign in to continue enjoying our movie platform.</p>
              </div>
              <div className="col-md-7 p-4 bg-white rounded-end-4">
                <h3 className="text-center fw-bold mb-3">Login</h3>
                <form onSubmit={handleClick}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                  <button type="button" className="btn btn-outline-dark w-100 mt-2 d-flex align-items-center justify-content-center">
                    <LoginSocialGoogle
                      client_id="859053594175-ofg9p7ekck1klvlcivr9tj9mgos7b2os.apps.googleusercontent.com"
                      access_type="online"
                      onResolve={(response) => {
                        localStorage.setItem('google_email', JSON.stringify(response));
                        setGoogleEmail(response);
                        navigate('/home');
                      }}
                      onReject={(err) => console.error(err)}
                    >
                      <i className="fa-brands fa-google me-2" style={{ color: '#DB4437' }}></i>
                      Sign in with Google
                    </LoginSocialGoogle>
                  </button>
                  <div className="text-center mt-3">
                    <p>
                      Don't have an account? <a href="/signup" className="text-primary">Register</a>
                    </p>
                    <p>
                      Forgot Password? <a href="/forgotpassword" className="text-primary">Reset Password</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
