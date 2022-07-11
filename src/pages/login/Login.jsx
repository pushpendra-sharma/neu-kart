import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCredentials = {
    email: email,
    password: password,
  };

  const loginHandler = e => {
    e.preventDefault();
    dispatch(loginUser(userCredentials))
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const testLoginHandler = e => {
    e.preventDefault();

    dispatch(
      loginUser({
        email: 'kevin@gmail.com',
        password: 'kevin@123',
      })
    )
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

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
            onChange={e => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            className='input-email'
            type='password'
            placeholder='Enter Password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          ></input>
          <span className='forgot-password'>Forgot?</span>
          <p className='terms'>
            By continuing, you agree to Flipkart's <span>Terms of Use</span> and
            <span> Privacy Policy.</span>
          </p>
          <button className='btn-login' onClick={loginHandler}>
            Login
          </button>
          <button className='btn-login' onClick={testLoginHandler}>
            Test Login
          </button>
          <Link className='signup' to='/signup'>
            New to Flipkart? Create an account
          </Link>
        </section>
      </div>
    </>
  );
};
export default Login;
