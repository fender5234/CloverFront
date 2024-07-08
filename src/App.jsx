import logo from './assets/images/logo.svg';
import user from './assets/images/user.jpg';

import { useState } from 'react';
import './App.css';

import Bots from './componentns/Bots';
import EditBot from './componentns/EditForm/EditBot'

function App() {
  const [sidebarState, setSidebarState] = useState(false);

  function sidebarOpen() {
    setSidebarState(!sidebarState);
  }

  return (
    <>
      <div className={sidebarState ? 'sidebar open' : 'sidebar'}>
        <a className='sidebar-logo-link' href='#'>
          <img className='sidebar-logo-image' src={logo} alt='Логотип CloverChat' />
        </a>
        <ul className='nav-list'>
          <li>
            <a className='nav-link' href='#'>
              <svg className='nav-link-icon' width='20.000000' height='20.000000' viewBox='0 0 20 20' fill='none'>
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id='clip5_31'>
                    <rect id='agents' width='20.000000' height='20.000000' fill='white' fillOpacity='0' />
                  </clipPath>
                </defs>
                <g clipPath='url(#clip5_31)'>
                  <path
                    id='path'
                    d='M19.99 10.43C19.76 15.79 15.37 20 10 20C6.02 20 2.44 17.64 0.85 14.05C0.85 14.09 0.83 14.12 0.83 14.16L0.83 17.08C0.83 17.31 0.64 17.5 0.41 17.5C0.18 17.5 0 17.31 0 17.08L0 14.16C0 13.24 0.74 12.5 1.66 12.5L4.58 12.5C4.81 12.5 5 12.68 5 12.91C5 13.14 4.81 13.33 4.58 13.33L1.66 13.33C1.6 13.33 1.54 13.35 1.48 13.37C2.85 16.85 6.23 19.16 10 19.16C14.92 19.16 18.94 15.31 19.15 10.39C19.16 10.17 19.36 10 19.59 10C19.82 10.01 20 10.2 19.99 10.43ZM19.58 2.5C19.35 2.5 19.16 2.68 19.16 2.91L19.16 5.83C19.16 5.87 19.14 5.9 19.14 5.94C17.55 2.35 13.97 0 10 0C4.62 0 0.23 4.2 0 9.56C-0.01 9.79 0.17 9.98 0.4 10C0.62 10 0.83 9.82 0.84 9.6C1.05 4.68 5.07 0.83 10 0.83C13.76 0.83 17.14 3.15 18.51 6.62C18.45 6.64 18.39 6.66 18.33 6.66L15.41 6.66C15.18 6.66 15 6.85 15 7.08C15 7.31 15.18 7.5 15.41 7.5L18.33 7.5C19.25 7.5 20 6.75 20 5.83L20 2.91C20 2.68 19.81 2.5 19.58 2.5ZM12.5 6.25L12.5 7.5L12.91 7.5C14.06 7.5 15 8.43 15 9.58L15 14.86C15 15.4 14.56 15.83 14.03 15.83C13.85 15.83 13.67 15.78 13.51 15.68L11.64 14.16L9.58 14.16C8.43 14.16 7.5 13.23 7.5 12.08L7.5 11.11L6.52 11.9C6.32 12.03 6.14 12.08 5.96 12.08C5.43 12.08 5 11.65 5 11.11L5 6.25C5 5.1 5.93 4.16 7.08 4.16L10.41 4.16C11.56 4.16 12.5 5.1 12.5 6.25ZM7.5 10.03L7.5 9.58C7.5 8.43 8.43 7.5 9.58 7.5L11.66 7.5L11.66 6.25C11.66 5.56 11.1 5 10.41 5L7.08 5C6.39 5 5.83 5.56 5.83 6.25L5.83 11.11C5.83 11.2 5.91 11.25 5.96 11.25L7.5 10.03ZM12.91 8.33L9.58 8.33C8.89 8.33 8.33 8.89 8.33 9.58L8.33 12.08C8.33 12.77 8.89 13.33 9.58 13.33L11.78 13.33C11.88 13.33 11.97 13.36 12.05 13.42L14 15C14.08 15 14.16 14.95 14.16 14.86L14.16 9.58C14.16 8.89 13.6 8.33 12.91 8.33Z'
                    fill='currentColor'
                    fillOpacity='1.000000'
                    fillRule='nonzero'
                  />
                </g>
              </svg>
              Агенты
            </a>
          </li>
          <li>
            <a className='nav-link' href='#'>
              <svg className='nav-link-icon' width='24.000000' height='24.000000' viewBox='0 0 24 24' fill='none'>
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id='clip5_29'>
                    <rect id='instruction' width='24.000000' height='24.000000' fill='white' fillOpacity='0' />
                  </clipPath>
                </defs>
                <g clipPath='url(#clip5_29)'>
                  <path
                    id='path'
                    d='M9.62 6.45C9.47 5.81 8.94 5.38 8.29 5.38C7.64 5.38 7.1 5.81 6.96 6.43L4.51 14.98C4.45 15.2 4.6 15.52 4.9 15.52C5.08 15.51 5.26 15.4 5.31 15.21L6.19 12.14L10.33 12.14L11.18 15.21C11.24 15.43 11.47 15.57 11.69 15.5C11.91 15.44 12.04 15.21 11.98 14.98L9.62 6.45ZM6.43 11.3L7.77 6.64C7.84 6.33 8.08 6.22 8.29 6.22C8.49 6.22 8.74 6.33 8.81 6.66L10.1 11.3L6.43 11.3ZM17.41 14.25C17.41 14.48 17.23 14.67 17 14.67L14.08 14.67C13.85 14.67 13.66 14.48 13.66 14.25C13.66 14.02 13.85 13.83 14.08 13.83L17 13.83C17.23 13.83 17.41 14.02 17.41 14.25ZM19.08 6.64C19.08 6.88 18.89 7.07 18.66 7.07L14.08 7.07C13.85 7.07 13.66 6.88 13.66 6.64C13.66 6.41 13.85 6.22 14.08 6.22L18.66 6.22C18.89 6.22 19.08 6.41 19.08 6.64ZM19.08 2L4.91 2C3.3 2 2 3.32 2 4.95L2 15.94C2 17.57 3.3 18.9 4.91 18.9L7.92 18.9L11.16 21.67C11.4 21.89 11.7 22 12 22C12.29 22 12.58 21.89 12.81 21.68L16.14 18.9L19.08 18.9C20.69 18.9 22 17.57 22 15.94L22 4.95C22 3.32 20.69 2 19.08 2ZM21.16 15.94C21.16 17.11 20.23 18.05 19.08 18.05L15.99 18.05C15.89 18.05 15.79 18.09 15.72 18.15L12.27 21.04C12.11 21.18 11.88 21.18 11.71 21.03L8.34 18.15C8.26 18.09 8.17 18.05 8.07 18.05L4.91 18.05C3.76 18.05 2.83 17.11 2.83 15.94L2.83 4.95C2.83 3.79 3.76 2.84 4.91 2.84L19.08 2.84C20.23 2.84 21.16 3.79 21.16 4.95L21.16 15.94ZM19.08 11.71C19.08 11.95 18.89 12.14 18.66 12.14L14.08 12.14C13.85 12.14 13.66 11.95 13.66 11.71C13.66 11.48 13.85 11.29 14.08 11.29L18.66 11.29C18.89 11.29 19.08 11.48 19.08 11.71ZM19.08 9.18C19.08 9.41 18.89 9.6 18.66 9.6L14.08 9.6C13.85 9.6 13.66 9.41 13.66 9.18C13.66 8.95 13.85 8.76 14.08 8.76L18.66 8.76C18.89 8.76 19.08 8.95 19.08 9.18Z'
                    fill='currentColor'
                    fillOpacity='1.000000'
                    fillRule='nonzero'
                  />
                </g>
              </svg>
              Инструкции
            </a>
          </li>
          <li>
            <a className='nav-link' href='#'>
              <svg className='nav-link-icon' width='20.000000' height='20.000000' viewBox='0 0 20 20' fill='none'>
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id='clip5_27'>
                    <rect id='support' width='20.000000' height='20.000000' fill='white' fillOpacity='0' />
                  </clipPath>
                </defs>
                <g clipPath='url(#clip5_27)'>
                  <path
                    id='path'
                    d='M9.95 5.38C10.14 6.44 9.64 7.5 8.7 8.02C8.29 8.25 7.91 8.94 7.91 9.48L7.91 10L7.08 10L7.08 9.48C7.08 8.64 7.63 7.66 8.3 7.29C8.93 6.94 9.26 6.25 9.14 5.52C9.02 4.85 8.47 4.31 7.8 4.19C7.3 4.1 6.81 4.23 6.42 4.55C6.05 4.87 5.83 5.33 5.83 5.83L5 5.83C5 5.09 5.32 4.39 5.89 3.91C6.45 3.44 7.2 3.24 7.95 3.37C8.95 3.55 9.78 4.37 9.95 5.38ZM7.5 10.83C7.04 10.83 6.66 11.2 6.66 11.66C6.66 12.12 7.04 12.5 7.5 12.5C7.95 12.5 8.33 12.12 8.33 11.66C8.33 11.2 7.95 10.83 7.5 10.83ZM16.66 7.56C16.66 7.88 16.64 8.19 16.6 8.5C18.15 9.56 19.16 11.33 19.16 13.33L19.16 19.16L13.33 19.16C11.33 19.16 9.56 18.15 8.5 16.6C8.19 16.64 7.88 16.66 7.56 16.66C8.72 18.65 10.87 20 13.33 20L20 20L20 13.33C20 10.87 18.65 8.72 16.66 7.56ZM10.47 14.38C9.55 14.78 8.55 15 7.5 15L0 15L0 7.5C0 3.36 3.36 0 7.5 0C11.63 0 15 3.36 15 7.5C15 10.26 13.49 12.68 11.25 13.98L13.03 15.7C13.2 15.87 13.46 15.87 13.62 15.71L17.01 12.39L17.59 12.99L14.21 16.3C13.97 16.54 13.65 16.66 13.33 16.66C13.01 16.66 12.69 16.54 12.44 16.3L10.47 14.38ZM7.5 14.16C11.17 14.16 14.16 11.17 14.16 7.5C14.16 3.82 11.17 0.83 7.5 0.83C3.82 0.83 0.83 3.82 0.83 7.5L0.83 14.16L7.5 14.16Z'
                    fill='currentColor'
                    fillOpacity='1.000000'
                    fillRule='nonzero'
                  />
                </g>
              </svg>
              Техподдержка
            </a>
          </li>
        </ul>
      </div>
      <header
        className='header'
        onClick={() => {
          if (sidebarState) {
            sidebarOpen();
          }
        }}>
        <nav className='header-nav'>
          <button
            className='menu-button'
            onClick={() => {
              sidebarOpen();
            }}></button>
          <button className='user-button'>
            <img src={user} alt='Иконка пользователь' />
          </button>
        </nav>
      </header>
      <main
        className='main'
        onClick={() => {
          if (sidebarState) {
            sidebarOpen();
          }
        }}>
        <div className='layout'>
          {/* <NewAgents /> */}
          {/* <Bots /> */}
          <EditBot />
        </div>
      </main>
    </>
  );
}

export default App;

