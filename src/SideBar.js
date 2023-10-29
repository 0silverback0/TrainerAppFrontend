import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LogoutButton from './LogoutButton';

const SideBar = () => {

  const [formType, setFormType] = useState(false)  // 0 is for login form and 1 for signup form
  const FormSwitch = () =>{
    setFormType(!formType);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hideSidebar , sethideSidebar]=useState(true)
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
    <>
      <div onClick={()=>sethideSidebar(!hideSidebar)}>
        <h1 className="nav-link bg-black text-white" 
          style={{
            border: '1px solid black',
            borderRadius: '100px',
            cursor: 'pointer',
            padding: '0.5rem 1.4rem',
            // position:"fixed",
          }}>Login</h1>
      </div>

      {hideSidebar && 
        <div
          className="sidebar"
          style={{
            height: 'auto',
            maxWidth: '25rem',
            width: '80%',
            backgroundColor: '#333', 
            color: '#fff', 
            padding: '20px',
            position: 'fixed',
            marginTop: '2rem',
            top: '50%',
            left: '50%',
            // right: 0,
            translate: '-50% -50%',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <h2>{!formType ?  'Login': 'Register'}</h2>
            <span 
              style={{
                color: 'white', 
                fontSize: '1.5rem', 
                cursor: 'pointer',
              }}
              onClick={()=>{sethideSidebar(false);setFormType(false)}}>&times;</span> 
              {/* setting false to close the sidebar and to make the form to Login form, 
                  So that after closing the form and if login button is again pressed it will load Login form only ,
                  if not given like this it will open last form that was opened(either login or register)
              */}
          </div>
        {!formType ? // switch forms - Login or Register
          <form onSubmit={handleLogin} className='d-flex flex-column gap-3'>
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
            <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
          </form>:<SignupForm />} {/* Toggle between form type*/}
          <div onClick={FormSwitch} 
            style={{
              textDecorationLine: 'underline', 
              display:'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginTop: '1rem',
              cursor: 'pointer'
            }}>
            {!formType ? "Don't have account ? Register." : "Already have an Account? Sign In"} {/*Change according to the form (Login or Sign up)*/}
          </div>
          {/* <LogoutButton /> */}
        </div>
      }
    </>
  );
};

export default SideBar;
