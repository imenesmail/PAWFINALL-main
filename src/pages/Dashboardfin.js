import React from 'react';
import Dashf from '../components/Dashf';
import Sidebar from '../components/Sidebar';



import "../App.css";


function Dashboardfin() {
    return (
      <>
      <Sidebar />
      <div className="content">
       <Dashf />
       
      </div>
    </>
    
    );
}
export default Dashboardfin;
