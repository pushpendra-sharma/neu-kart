import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import './Auth.css';
import { loginUser } from '../../redux/features/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCredentials = {
    email: email,
    password: password,
  };

  const loginHandler = e => {
    e.preventDefault();
    dispatch(loginUser(userCredentials))
      .unwrap()
      .then(() => {
        toast.success('Login successfull!');
        navigate('/');
      })
      .catch(e => {
        setError(e.message);
        toast.error('Login failed!');
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
      .unwrap()
      .then(() => {
        toast.success('Login successfull!');
        navigate('/');
      })
      .catch(err => {
        setError(err.message);
        toast.error('Login failed!');
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
            className='input-form'
            name='email'
            type='email'
            placeholder='Enter Email'
            onChange={e => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            className='input-form'
            name='password'
            type='password'
            placeholder='Enter Password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          ></input>
          {error && <span className='error-msg'>{error}</span>}
          <span className='forgot-password'>Forgot?</span>
          <p className='terms'>
            By continuing, you agree to Neukart's <span>Terms of Use</span> and
            <span> Privacy Policy.</span>
          </p>
          <button className='btn-login' onClick={loginHandler}>
            Login
          </button>
          <button className='btn-login' onClick={testLoginHandler}>
            Test Login
          </button>
          <Link className='signup' to='/signup'>
            New to Neukart? Create an account
          </Link>
        </section>
      </div>
    </>
  );
};
export default Login;
