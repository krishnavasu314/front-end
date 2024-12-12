import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.username) return 'Username is required.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Invalid email.';
    if (formData.password.length < 8) return 'Password must be at least 8 characters.';
    return null;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setError(error);
      return;
    }

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: formData.username,
        password: formData.password,
      });
      localStorage.setItem('authToken', response.data.token);
      navigate('/home');
    } catch (err) {
      setError('Login failed. Check your credentials.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
