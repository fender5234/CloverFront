import './Header.scss';
import user from '../../assets/images/user.jpg';
import MenuButton from '../MenuButton/MenuButton';
import UserButton from '../UserButton/UserButton';

function Header({ sidebarOpen, sidebarState }) {
    return (
        <header
            className='header'
            onClick={() => {
                if (sidebarState) {
                    sidebarOpen();
                }
            }}>
            <nav className='header-nav'>
                <MenuButton sidebarOpen={sidebarOpen} />
                <UserButton />
            </nav>
        </header>

    )
}

export default Header;