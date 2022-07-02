import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className='container-login'>
        <section className='login-desc'>
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section className='login-form'>
          <input
            className='input-email'
            type='email'
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className='input-email'
            type='password'
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <span className='forgot-password'>Forgot?</span>
          <p className='terms'>
            By continuing, you agree to Flipkart's <span>Terms of Use</span> and
            <span> Privacy Policy.</span>
          </p>
          <button className='btn-login'>Login</button>
          <Link className='signup' to='/signup'>
            New to Flipkart? Create an account
          </Link>
        </section>
      </div>
    </>
  );
};
export default Login;
