import React, { useState } from 'react';

const Footer = () => {
    // État pour stocker l'email entré et les abonnés
    const [email, setEmail] = useState('');
    const [subscribers, setSubscribers] = useState([]);

    // Fonction pour gérer l'abonnement
    const handleSubscribe = () => {
        // Vérifie que l'email n'est pas vide
        if (!email.trim()) {
            alert('Please enter a valid email address.');
            return;
        }

        // Vérifie si l'email est déjà abonné
        if (subscribers.includes(email)) {
            alert('You are already subscribed!');
            return;
        }

        // Ajoute l'email à la liste des abonnés
        setSubscribers([...subscribers, email]);
        alert(`Thank you for subscribing! Your email (${email}) has been added.`);

        // Réinitialise le champ de saisie
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src="/images/logo.png" alt="Daisy Days Logo" className="footer-logo" />
                    <p>Don't forget to subscribe and follow us on social media to stay updated with the latest news, features, and updates. Join our community and be part of the conversation!</p>
                    
                    {/* Champ d'entrée pour l'email */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Met à jour l'état
                        className="email-input"
                    />

                    {/* Bouton Subscribe */}
                    <button className="subscribe-button" onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>

                <div className="footer-center">
                    <div className="footer-column">
                        <h3>Platform</h3>
                        <ul>
                            <li><a href="#overview">Overview</a></li>
                            <li><a href="#profile">Profile</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="#how-it-works">How does it work?</a></li>
                            <li><a href="#faq">Where to ask questions?</a></li>
                            <li><a href="#find-us">How to find us?</a></li>
                            <li><a href="#more">More</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="tel:7857899885">785-789-9885</a></li>
                            <li><a href="mailto:lynime@gmail.com">lynime@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social-icons">
                        <a href="#"><img src="facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="google.png" alt="Google" /></a>
                        <a href="#"><img src="apple-logo.png" alt="Apple" /></a>
                        <a href="#"><img src="linkedin.png" alt="LinkedIn" /></a>
                        <a href="#"><img src="instagram.png" alt="Instagram" /></a>
                    </div>
                    <p>© Daisydays 2024 All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
