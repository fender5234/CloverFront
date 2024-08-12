import './UserForms.scss';
import login from '../../API/login.js';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import { useContext } from 'react';
import loginContext from '../../context/loginContext.js';
import { useEffect } from 'react';

function Login() {
  const navigate = useNavigate();
  const { userIsLogin, setUserIsLogin } = useContext(loginContext);

  function handleInputChange(e, name) {
    setUserData({ ...userData, [name]: e.target.value });
  }

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (userIsLogin) {
      navigate('/');
    }
  }, [userIsLogin]);

  return (
    <div className='user-form-wrapper'>
      <NavLink to='/' className='user-form-logo'>
        <img className='sidebar-logo-image' src={logo} alt='Логотип CloverChat' />
      </NavLink>
      <form
        className='user-form'
        onSubmit={(evt) => {
          evt.preventDefault();
          login(userData, setUserIsLogin);
        }}>
        <h1 className='user-form-title'>Login</h1>
        <p className='user-form-subtitle'>Sign in to your account</p>
        <input className='user-form-input' type='text' value={userData.userName} onChange={(e) => handleInputChange(e, 'email')} placeholder='Login' />
        <input className='user-form-input' type='password' value={userData.userPass} onChange={(e) => handleInputChange(e, 'password')} placeholder='Password' />
        <button className='user-form-button' type='submit'>
          Login
        </button>
        <Link className='user-form-link' to='/forgotpass'>
          Forgot your password?
        </Link>
        <Link className='user-form-button-link' to='/register'>
          Register now
        </Link>
        <Link className='user-form-info-link'>By filling out the form, I accept the terms ofinformation transfer and consent to receiveinformation about products and services</Link>
      </form>
    </div>
  );
}

export default Login;

