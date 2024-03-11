import React, { useReducer, useState } from 'react'
import './login.css'
import { Navigate } from "react-router-dom";
const initialValue = {
    username: '',
    password: '',
  };
  
const reducer =(state,action)=>{
    switch (action.type) {
        case "username": return {...state,username : action.payload}
        case "password": return {...state,password : action.payload}
        default:
            break;
    }
}
const Login = () => {

    const [state,dispatch] =useReducer(reducer,initialValue)
    const [loaded,setLoaded] =useState(false)


  const handleLogin = (e) => {
    e.preventDefault();
    if(state.username==="pranjal" &&state.password==="prateek"){
        setLoaded(true)
    }
   
  };

  return (
    <div className="login-container">
        {loaded ?<Navigate to={'/getImages'}/> : <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={state.username}
          onChange={(e) => dispatch({type:'username',payload:e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={state.password}
          onChange={(e) =>dispatch({type:'password',payload:e.target.value})}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>}
   
  </div>
  )
}

export default Login
