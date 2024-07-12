import logo from '../../assets/images/logo.svg';
import './SideBar.scss';

import NavList from '../NavList/NavList';

function SideBar({ sidebarState }) {
    return (
        <div className={sidebarState ? 'sidebar open' : 'sidebar'}>
            <a className='sidebar-logo-link' href='#'>
                <img className='sidebar-logo-image' src={logo} alt='Логотип CloverChat' />
            </a>
            <NavList />
        </div>

    )
}

export default SideBar;