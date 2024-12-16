import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez le hook useNavigate



const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="/images/logo.png" alt="Daisy Days Logo" />
                </div>
                <ul className="navbar-menu">
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar-actions">
                    <span className="language-selector"><img src="world.png" alt="Language" /> English</span>
                    <button 
                        className="sign-up-button" 
                        onClick={() => navigate("/RegistrationPage")}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;