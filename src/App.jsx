import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './componentns/Pagination/Pagination.scss';
import loginContext from './context/loginContext';

import NotFound from './componentns/404/NotFound';
import Bots from './componentns/Bots/Bots';
import Integration from './componentns/Integration/Integration';
import EditBot from './componentns/EditBot/EditBot';
import EditChanel from './componentns/EditChanel/EditChanel';
import MainLayout from './componentns/MainLayout/MainLayout';
import Login from './pages/userDataForms/Login';
import Register from './pages/userDataForms/Register';
import ForgotPass from './pages/userDataForms/ForgotPass';

function App() {
  const [userIsLogin, setUserIsLogin] = useState(false);
  const [sidebarState, setSidebarState] = useState(false);

  console.log('Состояние входа',userIsLogin);

  function sidebarOpen() {
    setSidebarState(!sidebarState);
  }

  return (
    <loginContext.Provider
      value={{
        userIsLogin,
        setUserIsLogin,
      }}>
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
          <Route path='/register' element={<Register />}></Route>
          <Route path='/forgotpass' element={<ForgotPass />}></Route>
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
}

export default App;

