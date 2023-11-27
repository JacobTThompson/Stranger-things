import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import UserLogIn from './components/UserLogIn';
import RegisterPage from './components/Register';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';

function App() {
// const [token, setToken]= useState(null);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path= '/' element={<UserLogIn />}/>
     <Route path= '/register' element={<RegisterPage />}/> 
    </Routes>
    </>
  )
}

export default App
