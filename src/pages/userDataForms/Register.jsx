import './UserForms.scss';
import register from '../../API/register.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';

function Register() {
  function handleInputChange(e, name) {
    setUserData({ ...userData, [name]: e.target.value });
  }

  const [userData, setUserData] = useState({});

  return (
    <div className='user-form-wrapper'>
      <NavLink to='/' className='user-form-logo'>
        <img className='sidebar-logo-image' src={logo} alt='Логотип CloverChat' />
      </NavLink>
      <form
        className='user-form'
        onSubmit={(evt) => {
          evt.preventDefault();
          register(userData);
        }}>
        <h1 className='user-form-title'>Register</h1>
        <p className='user-form-subtitle'>Create your account</p>
        <input className='user-form-input' type='text' value={userData.userName} onChange={(e) => handleInputChange(e, 'name')} placeholder='Username'  />
        <input className='user-form-input' type='text' value={userData.userName} onChange={(e) => handleInputChange(e, 'email')} placeholder='E-mail' />
        <input className='user-form-input' type='password' value={userData.userPass} onChange={(e) => handleInputChange(e, 'password')} placeholder='Password' autoComplete='new-password'  />
        <input className='user-form-input' type='password' value={userData.userPass} onChange={(e) => handleInputChange(e, 'password')} placeholder='Repeat password' autoComplete='new-password'  />
        <button className='user-form-button' type='submit'>
          Create Account
        </button>
        <Link className='user-form-info-link'>By filling out the form, I accept the terms ofinformation transfer and consent to receiveinformation about products and services</Link>
      </form>
    </div>
  );
}

export default Register;

