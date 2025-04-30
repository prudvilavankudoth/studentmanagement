import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful for " + formData.email);
    // Navigate to main page after login
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password: </label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Don't have an account? <a href="/registration">Register here</a>
      </p>
    </div>
  );
}

export default Login;
