import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    fetch('http://127.0.0.1:8000/auth/token/logout/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`, // Include the user's token for authentication
      },
    })
      .then((response) => {
        if (response.ok) {
          
          console.log('Logout successful');
         
          localStorage.removeItem('userId');
          localStorage.removeItem('token');
        } else {
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error('An error occurred during logout:', error);
      });
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default LogoutButton;
