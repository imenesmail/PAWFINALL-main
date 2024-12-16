import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState("");

  return (
    <div className="section-notes">
      <h3 className="section-title">Notes</h3>
      <textarea
        className="notes-input"
        placeholder="Write your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}

export default Notes;