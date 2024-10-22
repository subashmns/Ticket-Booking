import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { cartCreate } from '../../CartContext';
// import RouteFile from '../../RouteFile'


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserEmail, setUserPassword, setGoogleEmail } = useContext(cartCreate)

  const handelClick = (e) => {
    e.preventDefault();
    if (email === "test@gmail.com" && password === "123") {
      localStorage.setItem("userEmail", JSON.stringify(email));
      localStorage.setItem("userPassword", JSON.stringify(password));
      console.log('Logged in as:', email);
      console.log('Password:', password);
      setUserEmail(email);
      setUserPassword(password);

      alert('Login successful!');
      setTimeout(() => {
        navigate('/home');
      }, 500);
    }
    else {
      alert('Invalid email or password');
    }

  };

  return (
    <>
      <div className="container shadow p-5 rounded mt-5" >
        <div className="row">
          <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <h1 className='text-danger'>Movie Now </h1>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Deleniti, dignissimos minima! Nostrum assumenda amet numquam sunt libero, vel <br/>   quas, sequi voluptates deleniti veritatis corporis neque velit vitae dolor voluptatum dicta.</p>
          </div>
          <div className="col-lg-5">
            <div className="container shadow p-5 rounded-5">
              <h1 className='text-center'>Login</h1>

              <form onSubmit={handelClick}>
                <button type='button' className='btn btn-outline-secondary w-100 fs-4 my-3'>
                  <LoginSocialGoogle
                    client_id="859053594175-ofg9p7ekck1klvlcivr9tj9mgos7b2os.apps.googleusercontent.com"
                    access_type='offline'
                    onResolve={(response) => {

                      localStorage.setItem("google_email", JSON.stringify(response));
                      setGoogleEmail(response)
                      navigate('/home');
                    }}
                    onReject={(err) => {
                      console.error(err)
                    }}
                  >
                    <span><i className="fa-brands fa-google fs-4" style={{ color: '#4285F4', fontSize: '20px', marginRight: '8px' }}></i> </span>
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#DB4437' }}>o</span>
                    <span style={{ color: '#F4B400' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#0F9D58' }}>l</span>
                    <span style={{ color: '#DB4437' }}>e</span>
                  </LoginSocialGoogle>
                </button>
                <div className="form-group p-2 my-2">
                  <label htmlFor="username" className='mb-2'>Email :</label>
                  <input type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter Your Email"
                    value={email}  //value from state to update the input field dynamically
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }} />
                </div>
                <div className="form-group p-2 my-2">
                  <label htmlFor="password" className='mb-2'>Password :</label>
                  <input type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
                </div>
                <div className="justify-content-center d-flex pt-3">
                  <button type="submit" className="btn btn-primary w-50">Login</button>
                </div>
                <div className="text-center p-2">Don't have an account? <a href="/signup" alt="register" className='text-decoration-none'>Register</a></div>
                <div className="text-center p-2">Forgot Password? <a href="/forgotpassword" alt="reset" className='text-decoration-none'>Reset Password</a></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login