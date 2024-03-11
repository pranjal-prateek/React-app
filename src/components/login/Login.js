import React, { useReducer, useState } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import './login.css'
const initialValue = {
  username: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [loaded, setLoaded] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const token = await login(state.username, state.password);
      if (token) {
        localStorage.setItem('token', token);
        setLoaded(true);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
        // return redirect("/login");
      console.error('Error:', error.message);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.token;
      console.log('Token:', token);
      return token;
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  };

  return (
    <div className="login-container">
      {loaded ? (
        <Navigate to={'/getImages'} />
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={state.username}
              onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
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
              onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
