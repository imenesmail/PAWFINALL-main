import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const API_URL = "http://localhost:5000"; // Backend API URL

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed.");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      localStorage.setItem("token", data.token); // Store the token
      alert(`Welcome back, ${data.user.username}!`);
      navigate("/Dashboard"); // Navigate to Dashboard
    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="containerL">
      <div className="left-panel">
        <h2>Your partner in productivity and task management.</h2>
      </div>
      <div className="right-panel">
        <div className="logo">
          <h1>DAISY DAYS</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="sign-in">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
