import React from 'react';
import Home from './pages/Home';
import UserContext from './context/UserContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <UserContext>
      <Home />
      <ToastContainer/>
    </UserContext>
  );
}

export default App;