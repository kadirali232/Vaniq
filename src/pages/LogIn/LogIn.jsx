import React, { useState } from 'react';
import './LogIn.css';
import Loginpic from '../../assets/Loginpic.png';

const LogIn = () => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('User ID:', userID);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="container">
      <div className="loginContent">
        <div className="loginContainer">
          <h2 className="title">Log In to My Account</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="inputGroup">
              <label htmlFor="userID">User ID</label>
              <input
                type="text"
                id="userID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="checkboxGroup">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="checkboxLabel">
                Remember Me
              </label>
            </div>
            <button type="submit" className="button">Log In</button>
          </form>
          <div className="links">
            <a href="#" className="link">Forgot User ID or Password ?</a>
            <br />
            <a href="#" className="link">Create new online account</a>
            <br />
            <a href="#" className="link">Activate new card</a>
          </div>
        </div>
        <div className="imageContainer">
          <img src={Loginpic} alt="Vaniq Login Pic" className="loginPic" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
