import logIn from './components/LogIn';
 import { Routes, Route} from 'react-router-dom';
import './App.css';
import './index.css';

function App() {


  return (
    <>
    <Routes>
    <Route path='/logIn' element={<logIn/>}/>
    </Routes>
    </>
  )
}

export default App
