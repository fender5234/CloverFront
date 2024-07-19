import { useState } from 'react';
import './App.css';
import './componentns/Pagination/Pagination.scss';

import Header from './componentns/Header/Header';
import SideBar from './componentns/SideBar/SideBar';

import NewAgents from './componentns/NewAgents/NewAgents';
import Bots from './componentns/Bots/Bots';
import Integration from './componentns/Integration/Integration';
import EditBot from './componentns/EditBot/EditBot';
import EditChanel from './componentns/EditChanel/EditChanel';

function App() {
  const [sidebarState, setSidebarState] = useState(false);

  function sidebarOpen() {
    setSidebarState(!sidebarState);
  }

  return (
    <>
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
          {/* <NewAgents /> */}
          {/* <Bots /> */}
          {/* <EditBot />  */}
          {/* <Integration /> */}
          <EditChanel />
        </div>
      </main>
    </>
  );
}

export default App;

