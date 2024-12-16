import React from "react";
import PomodoroTimer from "./components/PomodoroTimer"; // Import du composant PomodoroTimer
import "./index.css"; // Import des styles globaux

function App() {
  return (
    <div className="App">
      <PomodoroTimer /> {/* Le composant principal */}
    </div>
  );
}

export default App;
