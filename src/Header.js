import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const handleClick = () =>{
    setToggleMenu(!toggleMenu);
  }

  return (
    <nav className="navbar navbar-light position-fixed top-0 w-100 px-2 px-md-5" 
      style={{
        backgroundColor: '#fafafa', 
        height: '4rem', 
        zIndex: 2}}>
       
      
      <div className="container-fluid">

        <div className="logo-container">
          <span className="navbar-brand">Coach's Dashboard</span>
        </div> 


        <ul className="list-group-flush d-none d-lg-flex gap-5 align-items-center justify-content-center my-auto">

          <li className="list-group-item">
            <Link  to="/" className="nav-link">Home</Link>
          </li>
          <li className="list-group-item">
            <Link to="/Clients" className="nav-link" >Clients</Link>
          </li>
          <li className="list-group-item">
            <Link  to ="/Workout" className="nav-link" >Workouts</Link>
          </li>
          <li className="list-group-item">
            <Link to="/Templates" className="nav-link" >Templates</Link>
          </li>
          <li className="list-group-item pt-2" style={{alignItems: 'center', justifyContent: 'center'}}>
            {/* <button onClick={openLoginMenu} className='nav-link p-2 px-4' style={{border: '1px solid black', borderRadius: '100px'}}>Login</button> */}
            <SideBar />
          </li>
        </ul>

        {/* Dropdown Menu button For smaller screens */}

        <button className="d-lg-none bg-transparent border-0" onClick={handleClick}>
          <i className={`fa-solid ${!toggleMenu ? 'fa-bars' : 'fa-times'} fs-5`}></i>
        </button>

        {
          <div className="d-lg-none position-absolute" 
              style={{
                backgroundColor: '#f8f8f8',
                top: '4rem',
                width: '10rem',
                height: 'calc(100vh - 4rem)',
                transition: 'all 0.15s ease-in-out',
                right: toggleMenu ? '0':'-10rem'    // toggle the side menu
              }}>

            <ul className="navbar-nav ml-auto p-2">

              <li className="nav-item d-flex align-items-center justify-content-center" style={{height: '2.5rem'}}>
                <Link to="/" onClick={handleClick} className="nav-link">Home</Link>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center" style={{height: '2.5rem'}}>
                <Link to="/Clients" onClick={handleClick} className="nav-link" >Clients</Link>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center" style={{height: '2.5rem'}}>
                <Link to="/Workout" onClick={handleClick} className="nav-link" >Workouts</Link>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center" style={{height: '2.5rem'}}>
                <Link to="/Templates" onClick={handleClick} className="nav-link" >Templates</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="list-group-item d-flex align-items-center justify-content-center" onClick={()=>setToggleMenu(false)}>
                <SideBar />
              </li>
            </ul>
          </div>
        }
      </div>
    </nav>
  );
};

export default Header;
