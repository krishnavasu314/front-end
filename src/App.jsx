import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('authToken');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to="/home" />} />
        <Route path="/home" element={isLoggedIn ? <MainPage /> : <Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
