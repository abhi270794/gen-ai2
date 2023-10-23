import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';
import './registration.css';

function RegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can implement server-side registration logic here
    // For simplicity, let's assume registration is successful
    // Replace this with actual server-side registration logic
    // If successful, set success message and save the username
    setSuccessMessage('Registration successful!');
    localStorage.setItem('username', formData.email);
    localStorage.setItem('password', formData.password);
    // Redirect to the user profile page
    navigate(`/user/${formData.username}`);
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          style={{width: "95%",padding: "10px", marginBottom:"15px", border: "1px solid #ccc",
          borderRadius: "5px",outline: "none"}}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
