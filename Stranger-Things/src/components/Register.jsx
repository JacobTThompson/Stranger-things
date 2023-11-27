import { useState, useEffect } from "react";
import { register, getPosts, getToken } from "../api";
import { useNavigate } from "react-router-dom";

// const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT}`;


export default function RegisterPage(){
  const nav = useNavigate();

  const [newRegister, setNewRegister] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState ('')


  const getUsers = async () => {
    const usersArr = await getPosts();
    setNewRegister(usersArr)
  }

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

      setUsername('');
      setPassword('');
      setConfirm('');
      // nav(`/users`);

    } catch(error)
{
  console.error('There was an error making user', error)
}}


  useEffect(() => {
    getUsers()
  }, []);

  return(
    <div className="register-container">
       <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
       <div>
        <label className="user-container">
          <p className="username">Username:</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </label>
       </div>
       <div>
          <label className="form-row">
            <p className="form-label">Password:</p>
            <input type = "password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
        </div>
        <div>
          <label className="form-row">
            <p className="form-label">Confirm Password:</p>
            <input type = "password" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
          </label>
        </div>
        <button type ="submit">Create Account</button>
      </form>
    </div>
  )
}