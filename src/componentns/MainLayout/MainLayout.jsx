import { Outlet } from 'react-router';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

function MainLayout({ sidebarState, sidebarOpen }) {
  return (
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
  );
}

export default MainLayout;

