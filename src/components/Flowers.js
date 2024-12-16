import React from "react";
import "../App.css";

function Flowers() {
  return (
    <div className="background">
      <div className="flower-container">
        {/* Fleur principale */}
        <div className="flower">
          <div className="petals"></div>
          <div className="stem"></div>
          <div className="leaves"></div>
        </div>

        {/* Autres fleurs similaires */}
        <div className="flower left-flower">
          <div className="petals"></div>
          <div className="stem"></div>
          <div className="leaves"></div>
        </div>

        <div className="flower right-flower">
          <div className="petals"></div>
          <div className="stem"></div>
          <div className="leaves"></div>
        </div>
      </div>
    </div>
  );
}

export default Flowers;
