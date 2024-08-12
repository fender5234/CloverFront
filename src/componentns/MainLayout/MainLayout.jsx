import { useNavigate, Outlet } from 'react-router';
import { useEffect } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { useContext } from 'react';
import loginContext from '../../context/loginContext';

function MainLayout({ sidebarState, sidebarOpen }) {
  const { userIsLogin } = useContext(loginContext);

  const navigate = useNavigate();

  return userIsLogin ? (
    <div className='main-layout'>
      <Header sidebarOpen={sidebarOpen} sidebarState={sidebarState} />
      <SideBar sidebarState={sidebarState} />
      <main
        className='main'
        onClick={() => {
          if (sidebarState) {
            sidebarOpen();
          }
        }}>
        <div className='layout'>
          <Outlet />
        </div>
      </main>
    </div>
  ) : (
    useEffect(() => {
      navigate('/login');
    }, [userIsLogin])
  );
}

export default MainLayout;

