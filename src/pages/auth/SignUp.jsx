import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import './Auth.css';
import { signUpUser } from '../../redux/features/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    userName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFromErrors] = useState({});
  const [error, setError] = useState('');

  const handleChange = event => {
    let { name, value } = event.target;
    setDetails({ ...details, [name]: value });

    let errors = formErrors;

    switch (name) {
      case 'userName':
        errors.userName = value.length !== 0 ? '' : 'Enter valid name';
        break;
      case 'mobile':
        errors.mobile = value.length === 10 ? '' : 'Enter valid mobile number';
        break;
      case 'email':
        errors.email = isEmail(value) ? '' : 'Enter valid email';
        break;
      case 'password':
        errors.password = value.length !== 0 ? '' : 'Enter valid password';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value === details.password ? '' : 'Password did not match';
        break;
      default:
        break;
    }

    setFromErrors(errors);
  };

  const signUpHandler = e => {
    e.preventDefault();
    const { userName: name, mobile, email, password } = details;
    const phone = Number(mobile);
    const signUpData = { name, mobileNumber: phone, email, password };
    dispatch(signUpUser(signUpData))
      .unwrap()
      .then(() => {
        toast.success('SignUp successfull!');
        navigate('/');
      })
      .catch(err => {
        setError(err.message);
        toast.error('SignUp failed!');
      });
  };

  return (
    <>
      <div className='container-signup'>
        <section className='login-desc'>
          <h2>Sign Up</h2>
          <p>Sign up with your email to get started</p>
        </section>
        <section className='login-form'>
          <input
            className='input-form'
            type='text'
            placeholder='Enter your name'
            onChange={handleChange}
            value={details.userName}
            name='userName'
          ></input>
          {formErrors.userName ? (
            <span className='error-msg'>{formErrors.userName}</span>
          ) : null}
          <input
            className='input-form'
            type='text'
            onChange={handleChange}
            placeholder='Enter mobile'
            value={details.mobile}
            name='mobile'
          ></input>
          {formErrors.mobile && (
            <span className='error-msg'>{formErrors.mobile}</span>
          )}
          <input
            className='input-form'
            type='email'
            placeholder='Enter your email'
            onChange={handleChange}
            value={details.email}
            name='email'
          ></input>
          {formErrors.email && (
            <span className='error-msg'>{formErrors.email}</span>
          )}
          <input
            className='input-form'
            type='password'
            onChange={handleChange}
            placeholder='Enter password'
            value={details.password}
            name='password'
          ></input>
          {formErrors.password && (
            <span className='error-msg'>{formErrors.password}</span>
          )}
          <input
            className='input-form'
            type='password'
            onChange={handleChange}
            placeholder='Confirm password'
            value={details.confirmPassword}
            name='confirmPassword'
          ></input>
          {formErrors.confirmPassword && (
            <span className='error-msg'>{formErrors.confirmPassword}</span>
          )}
          <button className='btn-login' onClick={signUpHandler}>
            Sign Up
          </button>
          {error && <span className='error-msg'>{error}</span>}
          <Link className='btn-existing-login' to='/login'>
            Existing User? Login in
          </Link>
        </section>
      </div>
    </>
  );
};

export default SignUp;
