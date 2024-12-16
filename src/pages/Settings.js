import React from 'react';


import "../App.css";
import Sidebar from '../components/Sidebar';
import Form from '../components/Form';

function Settings() {
  return (
    <div>
    <Sidebar />  {/* Utilisation du composant Header */}
    <main>
      <Form />
    </main>
    
  </div>
  
  );
}

export default Settings;
