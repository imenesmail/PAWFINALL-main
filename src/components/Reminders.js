import React, { useState } from "react";

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const addReminder = () => {
    if (newReminder.trim()) {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  return (
    <div className="section-reminders">
      <h3 className="section-title">Reminders</h3>
      <ul className="reminders-list">
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder}</li>
        ))}
      </ul>
      <input
        type="text"
        className="reminder-input"
        placeholder="Add a new reminder..."
        value={newReminder}
        onChange={(e) => setNewReminder(e.target.value)}
      />
      <button onClick={addReminder} className="add-reminder-btn">Add</button>
    </div>
  );
}

export default Reminders;
