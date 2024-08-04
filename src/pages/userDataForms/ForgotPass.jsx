import './UserForms.scss';
import login from '../../API/login.js';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';

function ForgotPass() {
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
        onSubmit={() => {
          preventDefault();
          login(userData);
        }}>
        <h1 className='user-form-title'>Forgot Your Password</h1>
        <p className='user-form-subtitle'>we'll send forget password link on your email.</p>
        <input className='user-form-input' type='text' value={userData.userName} onChange={(e) => handleInputChange(e, 'email')} placeholder='E-mail' required />
        <button className='user-form-button' type='submit'>
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPass;

