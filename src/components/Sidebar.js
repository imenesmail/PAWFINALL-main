import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import de useNavigate pour la navigation
import "../styles/Sidebar.css"; // Assurez-vous que votre fichier CSS est bien importé

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // La sidebar est ouverte par défaut
  const navigate = useNavigate(); // Déclare le hook navigate

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar latérale */}
      <div className={`side-nav ${isOpen ? "open" : ""}`}>

        {/* Conteneur du logo */}
        <div className="logo-container">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </div>

        {/* Bouton de fermeture */}
        <button className="close-btn" onClick={toggleNav}>
          ×
        </button>

        {/* Liens de navigation remplacés par des boutons */}
        <button className="nav-link" onClick={() => navigate("/Dashboardfin")}>My Profil</button>
        <button className="nav-link" onClick={() => navigate("/statistics")}>Statistics</button>
        <button className="nav-link" onClick={() => navigate("/calendarpage")}>Calendar</button>
        <button className="nav-link" onClick={() => navigate("/todo")}>To-Do</button>
        <button className="nav-link" onClick={() => navigate("/settings")}>Settings</button>
        <button className="nav-link" onClick={() => navigate("/Garden")}>My Garden</button>
        <button className="nav-link" onClick={() => navigate("/LoginPage")}>Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
