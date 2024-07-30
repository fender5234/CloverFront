import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './componentns/Pagination/Pagination.scss';

import Header from './componentns/Header/Header';
import SideBar from './componentns/SideBar/SideBar';

import NotFound from './componentns/404/NotFound';
import NewAgents from './componentns/NewAgents/NewAgents';
import Bots from './componentns/Bots/Bots';
import Integration from './componentns/Integration/Integration';
import EditBot from './componentns/EditBot/EditBot';
import EditChanel from './componentns/EditChanel/EditChanel';
import MainLayout from './componentns/MainLayout/MainLayout';
import Login from './pages/login/Login';

function App() {
  const [sidebarState, setSidebarState] = useState(false);

  function sidebarOpen() {
    setSidebarState(!sidebarState);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout sidebarState={sidebarState} sidebarOpen={sidebarOpen} />}>
          <Route path='assistans' element={<Bots />} />
          <Route path='instruction' element={<Bots />} />
          <Route path='assistans/edit-bot' element={<EditBot />} />
          <Route path='assistans/edit-chanel' element={<EditChanel />} />
          <Route path='assistans/integration' element={<Integration />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

