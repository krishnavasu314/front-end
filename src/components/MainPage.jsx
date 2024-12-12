import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/auth/login');
  };

  return (
    <div>
      <h1>Welcome, you are logged in!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainPage;
