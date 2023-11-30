import { useState, } from "react"
import {useNavigate, Link} from "react-router-dom"
import { login } from "../api";



export default function UserLogIn(){
  const nav= useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(username, password);
  }
 

  const authorizedLogIn = async (e) =>{
    e.preventDefault();
  

    try{
     
      const user = {
        username: username,
        password: password,
  
      }
      const result= await login(user);
      console.log(result.data.token, "here is token");

       sessionStorage.setItem("token", result.data.token);
       

      nav('/post')
    }catch(error) {
      console.error(error , "here is an error")
      alert("Not Authorized! Please register or try again!")
    }
  } 



  return(
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      rowGap: '5px'
   }} className="auth-form-container">
      <h2>Login</h2>
      <form onSubmit= {handleSubmit}>
        <label className="Login-Username">Username: 
          <input type = "text"  onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label className="Login-Pass">Password: 
          <input type = "password"  onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type ="submit" onClick={authorizedLogIn}>Log In</button>
      </form>
     <Link to = '/register'> <button>Don't have an account? Register here.</button> </Link>
    </div>
  )
}
