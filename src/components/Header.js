import React from 'react';
import { useNavigate } from 'react-router-dom'; 


const Header = () => {
    const navigate = useNavigate(); // Initialiser useNavigate
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Manage your tasks with AI & develop your skills</h1>
                    <p>You can also take a quick tour in the platform.</p>
                    <div className="hero-buttons">
                    <button
              type="button"
              
              className="hero-button primary"
              onClick={() => navigate("/Dashboard")}
            >
              Get Started
            </button>
                    
                        <button className="hero-button secondary">Take A Tour</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="images/photo3.png" alt="Illustration of AI task management" />
                </div>
            </div>
        </section>
    );
};

export default Header;
