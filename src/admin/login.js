import React from 'react';
import '../Styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-sidebar">
        <h1>Welcome Back!</h1>
        <p>Login to your account</p>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <Link to='/'><button type="submit" className="login-btn">Login</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Login;