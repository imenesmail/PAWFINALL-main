import React from 'react';


import "../App.css";
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';


function Calendarpage() {
  return (
    <div>
    <Sidebar />  {/* Utilisation du composant Header */}
    <main>
      <Calendar/>
    </main>
    
  </div>
  
  );
}

export default Calendarpage;