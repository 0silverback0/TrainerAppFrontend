import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 2,
    }}>
       
      
       
      <h1 className="navbar-brand" >Coach's Dashboard</h1>


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ml-auto">

            <li className="nav-item">
            <Link  to="/" className="nav-link">Home</Link>
          </li>
      <li className="nav-item">
            <Link to="/Clients" className="nav-link" >Clients</Link>
          </li>
          <li className="nav-item">
            <Link  to ="/Workout" className="nav-link" >Workouts</Link>
          </li>
          <li className="nav-item">
            <Link to="/Templates" className="nav-link" >Templates</Link>
  </li> 
        </ul>


      </div>
    </nav>
  );
};

export default Header;
