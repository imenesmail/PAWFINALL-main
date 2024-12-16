import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Registration.css";

const API_URL = "http://localhost:5000"; // Backend API URL

function RegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      console.log("Attempting registration with:", formData);

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Registration failed.");
      }

      console.log("Registration successful");
      navigate("/LoginPage");
    } catch (err) {
      console.error("Registration error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="containerR">
      <div className="left-panel">
        <h2>Your partner in productivity and task management.</h2>
      </div>
      <div className="right-panel">
        <div className="logo">
          <h1>DAISY DAYS</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Registration</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="terms">
            <input type="checkbox" required />
            <span>
              Creating an account means you're okay with our{" "}
              <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>,
              and our default <a href="#">Notification Settings</a>.
            </span>
          </div>
          <button type="submit" className="sign-up">
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate("/LoginPage")}
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
