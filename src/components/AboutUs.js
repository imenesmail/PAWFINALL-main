import React from 'react';


const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us-container">
                <div className="about-us-text">
                    <h2>Get to Know More About Us</h2>
                    <p>Daisy Days simplifies task management with intuitive features and a calming design, helping you stay organized and productive daily.</p>
                </div>
                <div className="about-us-cards">
                    <div className="card">
                        <img src="images/photo5.png" alt="Convenient Study Platform" />
                        <h3>Convenient study platform</h3>
                    </div>
                    <div className="card">
                        <img src="images/photo1.png" alt="Achieve Your Goals" />
                        <h3>Achieve Your Goals</h3>
                    </div>
                    <div className="card">
                        <img src="images/photo6.png" alt="Save Time and Boost Efficiency" />
                        <h3>Save Time and Boost Efficiency</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
