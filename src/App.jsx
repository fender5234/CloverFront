import { useState } from 'react';
import './App.css';

import Header from './componentns/Header/Header';
import SideBar from './componentns/SideBar/SideBar';

import NewAgents from './componentns/NewAgents/NewAgents';
import Bots from './componentns/Bots/Bots'
import EditBot from './componentns/EditBot/EditBot';

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
          {/* <EditBot /> */}
        </div>
      </main>
    </>
  );
}

export default App;

