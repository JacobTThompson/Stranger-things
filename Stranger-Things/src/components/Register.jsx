import { useState, useEffect } from "react";
import { register } from "../api";
import { useNavigate } from "react-router-dom";





export default function RegisterPage(){
  const nav = useNavigate();

  const [newRegister, setNewRegister] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState ('')




  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirm){
        alert( "Password does not match");
        return;
    }
    try{
      const newUser = await register(username, password);
      console.log(newUser);

      const newUsersArr = [newRegister, newUser];
      setNewRegister(newUsersArr);
      console.log(newUsersArr);

      setUsername('');
      setPassword('');
      setConfirm('');
      

    } catch(error)
{
  console.error('There was an error making user', error)
}}


 

  return(
    <div className="register-container">
       <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
       <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  rowGap: '5px'
               }}>
        <label className="user-container">
          <p className="username">Username:</p>
          <input type="text" value={username} onChange={(e) => {setUsername(e.target.value); console.log(e.target.value)}}></input>
        </label>
       </div>
       <div>
          <label className="form-row">
            <p className="password">Password:</p>
            <input type = "password" value={password} onChange={(e) => {setPassword(e.target.value); console.log(e.target.value)}}/>
          </label>
        </div>
        <div>
          <label className="form-row">
            <p className="confirm">Confirm Password:</p>
            <input type = "password" value={confirm} onChange={(e) => {setConfirm(e.target.value); console.log(e.target.value)}}/>
          </label>
        </div>
        <button className="submit-register" type ="submit">Create Account</button>
      </form>
    </div>
  )
}