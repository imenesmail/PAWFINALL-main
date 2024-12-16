import React, { useState } from "react";
import "../App.css"; // Ajoutez un fichier CSS pour le style

function App() {
  const [username, setUsername] = useState("@imenlyna");
  const [email, setEmail] = useState("imenlyna@gmail.com");
  const [dateOfBirth, setDateOfBirth] = useState("11/26/2004");
  const [phoneNumber, setPhoneNumber] = useState("+213 55837363");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    // Logique pour sauvegarder les modifications
    console.log("Modifications sauvegardées");
  };

  return (
    <div className="profile-form">
      <header className="profile-header">
        <img
          src="https://via.placeholder.com/150" // Remplacez par une URL d'image ou un composant d'upload
          alt="Profile"
          className="profile-picture"
        />
        <p>Upload a new profile picture</p>
      </header>

      <form className="form-container" onSubmit={handleEdit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} readOnly />
          <span className="verified">Verified</span>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="edit-button">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
