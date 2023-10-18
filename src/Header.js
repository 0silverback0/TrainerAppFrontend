import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 2,
    }}>
      <a className="navbar-brand" href="/">Coach's Dashboard</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/clients">Clients</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/workouts">Workouts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/templates">Templates</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
