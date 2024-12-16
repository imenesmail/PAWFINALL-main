import React from 'react';
import '../styles/Dash.css'; // Make sure to include this CSS for styling
   
import Musicex from './Musicex'; // This requires Musicex.js to exist
import Pomodoro from './Pomodoro'; // This requires Pomodoro.js to exist

    

function Dashf() {
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
        <div className="">
          <Pomodoro />
        </div>

        <div className="music">
         <Musicex />
        </div>

        {/* Messaging and Deadlines */}
        <div className="messaging">
          <h3>
            Access the messaging and chat with people from all over the world!
          </h3>
          <button>&gt;</button>
        </div>

        

        {/* Growth Chart */}
        <div className="growth">
          <h3>Growth</h3>
          
        </div>

        <div className="deadlines">
          <h3>Let check out your deadlines</h3>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Dashf;
