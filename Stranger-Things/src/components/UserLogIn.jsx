import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"
// const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT`;
// import { login, getPosts } from "../api";

export default function UserLogIn(){
  const nav= useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(username, password);
  }
  const goToRegister = () => {
    nav("/register")
  }


  // useEffect(() => {
    // login();
    // getPosts();
  // }, []);

  return(
    <div className="auth-form-container">
      <h2>Login</h2>
      <form onSubmit= {handleSubmit}>
        <label>Username: 
          <input type = "text" value = {username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>Password: 
          <input type = "password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type ="submit">Log In</button>
      </form>
      <button onClick={goToRegister}>Don't have an account? Register here.</button> 
    </div>
  )
}
