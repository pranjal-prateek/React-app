import React, { useState } from 'react'
import './login.css'
import { Navigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loaded,setLoaded] =useState(false)


  const handleLogin = (e) => {
    e.preventDefault();
    if(username==="pranjal" && password==="prateek"){
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>}
   
  </div>
  )
}

export default Login
