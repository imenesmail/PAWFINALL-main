import React from 'react';


import "../App.css";
import Sidebar from '../components/Sidebar';
import Flowers from '../components/Flowers';

function Garden() {
  return (
    <div>
    <Sidebar />  {/* Utilisation du composant Header */}
    <main>
      <Flowers />
    </main>
    
  </div>
  
  );
}

export default Garden;
