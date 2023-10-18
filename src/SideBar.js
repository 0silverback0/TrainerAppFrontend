import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LogoutButton from './LogoutButton';

const SideBar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/coaches/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        localStorage.setItem('userId', data.user_id); 
        localStorage.setItem('token', data.auth_token);
        
        console.log('userId in Local Storage:', localStorage.getItem('userId'));

        console.log('Login successful');
      } else {
        
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <div
      className="sidebar"
      style={{
        height: '100vh',
        width: '300px',
        backgroundColor: '#333', 
        color: '#fff', 
        padding: '20px',
        position: 'fixed',
        marginTop: '50px',
        top: 0,
        left: 0,
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <SignupForm />
     <LogoutButton />
    </div>
  );
};

export default SideBar;
