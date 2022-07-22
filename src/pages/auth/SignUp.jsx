import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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
        if (value.length === 0) {
          errors.userName = 'Enter valid name';
        } else {
          errors.userName = '';
        }
        break;
      case 'mobile':
        if (value.length !== 10) {
          errors.mobile = 'Enter valid mobile number';
        } else {
          errors.mobile = '';
        }
        break;
      case 'email':
        if (value.length === 0) {
          errors.email = 'Enter valid email';
        } else {
          errors.email = '';
        }
        break;
      case 'password':
        if (value.length === 0) {
          errors.password = 'Enter valid password';
        } else {
          errors.password = '';
        }
        break;

      case 'confirmPassword':
        if (value !== details.password) {
          errors.confirmPassword = 'Password did not match';
        } else {
          errors.confirmPassword = '';
        }
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
      .then(() => {
        toast.success('SignUp successfull!');
        navigate('/');
      })
      .catch(err => {
        setError('Some Error occured');
        console.log(err);
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
          {error && <span>{error}</span>}
          <Link className='btn-existing-login' to='/login'>
            Existing User? Login in
          </Link>
        </section>
      </div>
    </>
  );
};

export default SignUp;
