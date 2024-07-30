import './Login.scss';
import login from '../../API/login.js';
import React from 'react';
import { useState } from 'react';

function Login() {
  // function HandleFormSubmit(event) {
  //   event.preventDefault();
  //   alert(JSON.stringify(userData));
  // }

  function handleInputChange(e, name) {
    setUserData({ ...userData, [name]: e.target.value });
  }

  const [userData, setUserData] = useState({ userName: '', userPass: '' });

  return (
    <form
      onSubmit={() => {
        event.preventDefault();
        login(userData);
      }}>
      <input type='text' value={userData.userName} onChange={(e) => handleInputChange(e, 'email')} />
      <input type='password' value={userData.userPass} onChange={(e) => handleInputChange(e, 'password')} />
      <button type='submit'>Войти!</button>
    </form>
  );
}

export default Login;

