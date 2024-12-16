import React from 'react';
import '../styles/Dash.css'; // Make sure to include this CSS for styling

function Dash() {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <h2>Hi, <strong>Imène!</strong></h2>
        <p>Have a good productive day.</p>
        <div className="admin-profile">
          <div className="profile-info">
            <span>@imenlyna</span>
            <span className="role">Admin</span>
          </div>
          <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
        </div>
      </header>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Add Quick Task */}
        <div className="quick-task">
          <h3>Add quick task</h3>
          <input type="text" placeholder="I want to ..." />
          <div className="task-buttons">
            <button>Now</button>
            <button>Tomorrow</button>
            <button>Costum</button>
          </div>
        </div>

        {/* Focus Time & Music */}
        <div className="focus-time">
          <h3>Focus Time</h3>
          <button className="play-btn">Play</button>
        </div>

        <div className="music">
          <h3>Music</h3>
          <button className="play-btn">Play</button>
        </div>

        {/* Messaging and Deadlines */}
        <div className="messaging">
          <p>
            Access the messaging and chat with people from all over the world!
          </p>
          <button>&gt;</button>
        </div>

        <div className="deadlines">
          <p>Let check out your deadlines.</p>
          <button>&gt;</button>
        </div>

        {/* Growth Chart */}
        <div className="growth">
          <h3>Growth</h3>
          
        </div>
      </div>
    </div>
  );
}

export default Dash;
