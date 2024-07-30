import logo from '../../assets/images/logo.svg';
import './SideBar.scss';
import { NavLink } from 'react-router-dom';

import NavList from '../NavList/NavList';

function SideBar({ sidebarState }) {
  return (
    <div className={sidebarState ? 'sidebar open' : 'sidebar'}>
      <NavLink to="/" className='sidebar-logo-link'>
        <img className='sidebar-logo-image' src={logo} alt='Логотип CloverChat' />
      </NavLink>
      <NavList />
    </div>
  );
}

export default SideBar;
