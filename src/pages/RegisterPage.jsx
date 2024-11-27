// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { username, password });
      alert("Registration successful! Please log in.");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
