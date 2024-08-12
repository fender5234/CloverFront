import { createContext } from 'react';

const loginContext = createContext({
  userIsLogin: false,
  setUserLogin: () => { }
});

export default loginContext;